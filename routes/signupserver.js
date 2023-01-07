const express = require("express");
const {createConnection} = require("mysql")
const bodyParser = require("body-parser")
const router = express.Router()

// Variables
var data = "__"

// Mysql Connection Details
const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "primegaininvestment"
});

// Middleware
router.use(express.json());
router.use(express.urlencoded());

router.post("/",(req,res)=>{
    var username = req.body.name;
    var email = req.body.email;
    var telephone = req.body.tel;
    var password = req.body.password;
    var query = "INSERT INTO `users`(`id`, `username`, `email`, `telephone`, `password`) VALUES ('id','"+ username +"','"+email+"','"+telephone+"','"+password+"')";

    connection.query(query,(err,result,fields)=>{
        if(err){
          data = "Error"; 
          return false;
        }
        else{
            console.log(__filename);
        }  
    });
});

router.get("/api",(req,res)=>{
    res.send(JSON.stringify(data))
    console.log("Data Sent");
});

module.exports = router;
