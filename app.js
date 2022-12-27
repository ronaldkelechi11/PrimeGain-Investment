// Import Packages
const express = require("express")
const {createConnection} = require("mysql")
const bodyParser = require("body-parser");

const port = 3000;

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
connection.connect(()=>{
    console.log("Connected to Mysql Server");
});

// API Routes
app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
});

// To input to database
app.post("/",(req,res)=>{
    connection.query("INSERT INTO `users`(`id`, `username`, `email`, `telephone`, `password`) VALUES (null,'mmerechi3','mmerechiRonald11@gmail.com','09066881954','Password')", (err,result,fields)=>{
        if(err){
            console.log(err);
        }
         return console.log(result);
    });
});


// App port listen function
app.listen(port,(res)=>{
    console.log("Server is online on port: " + port);
});