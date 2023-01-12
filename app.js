// Import Packages
const express = require("express")
const {createConnection} = require("mysql")
const bodyParser = require("body-parser")
const { json } = require("body-parser");

// Express App Initialization
const app = express();

//Personal Values
const port = 4000;

// Routes
const signUpRoute = require("./routes/signupserver.js")
const signInRoute = require("./routes/signinserver.js")
const adminDashboardRoute = require("./routes/adminDashboardServer")

// Assigning Routes
app.use("/signUp.html", signUpRoute)
app.use("/signIn.html", signInRoute)
app.use("/adminDashboard", adminDashboardRoute)

// Middleware
app.use(express.static("./"))
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded());
 
// Mysql Connection Details
const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "primegaininvestment"
});

// To test connection to Mysql Server
connection.connect((err)=>{
    if(err) {
        console.log("Connection to Mysql DB failed" || "Please put on MySql Server");
    }
    else{
       console.log("Connected to Mysql Server"); 
    }
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

// For Refferals
app.get("/refferal/:username/:id",(req,res)=>{
   var id = req.params.id;
   var username = req.params.username;
   var data = "__"

    //To first check if the User actually exists in the refferal Program    
    // Then if not create a new user with refferalNumber 1
   var searchQuery = "SELECT * FROM `refferals` WHERE `username` =" + " '" + username+"'";
   var insertNewRefferal = "INSERT INTO `refferals`(`id`, `username`, `refferalAmmout`) VALUES ('" + id + "', '" + username + "', " + " '1');"


   connection.query(searchQuery,(err,result,fields)=>{
    if(err){
        console.log(err);
        return true
    }
    else if(result = "[]"){
        connection.query(insertNewRefferal,(err,result,fields)=>{
            if(err){
                console.error(err);
            }
            else{
                console.log(result);
            }
        })
    }

   });

})

// App port listen function
app.listen(port,(res)=>{
    console.log("Server is online on port: " + port);
});