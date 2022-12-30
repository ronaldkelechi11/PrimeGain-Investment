// Import Packages
const express = require("express")
const {createConnection} = require("mysql")
const bodyParser = require("body-parser")
const { json } = require("body-parser");

// Express App Initialization
const app = express();

//Personal Values
const port = 3000;
var data = [];

// Routes
const signUpRoute = require("./routes/signupserver")
const signInRoute = require("./routes/signinserver")

// Assigning Routes
app.use("/signUp", signUpRoute)
app.use("/signIn", signInRoute)

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


// App port listen function
app.listen(port,(res)=>{
    console.log("Server is online on port: " + port);
});