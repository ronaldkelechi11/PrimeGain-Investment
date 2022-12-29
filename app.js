// Import Packages
const express = require("express")
const {createConnection} = require("mysql")
const bodyParser = require("body-parser")
const events = require("events");
const { json } = require("body-parser");

//Personal Values
const port = 3000;
var data = [];

// Express App Initialization
const app = express();

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
connection.connect((err,res)=>{
    if(err) {
        console.log("Connection to Mysql DB failed");
    }
    else{
       console.log("Connected to Mysql Server"); 
    }
});

// API Routes
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

// To input to database
app.post("/signUp.html",(req,res)=>{
    var username = req.body.name;
    var email = req.body.email;
    var telephone = req.body.tel;
    var password = req.body.password;

    var query = "INSERT INTO `users`(`id`, `username`, `email`, `telephone`, `password`) VALUES ('id','"+ username +"','"+email+"','"+telephone+"','"+password+"')";
    connection.query(query, (err,result,fields)=>{
        if(err.errno = 1620){
            console.log("ERROR");
            data.push(err.errno) 
            res.json(data[0])
        }
        else{
            res.sendFile(__dirname + "/public/signIn.html");
            
        } 
    });
});


// App port listen function
app.listen(port,(res)=>{
    console.log("Server is online on port: " + port);
});