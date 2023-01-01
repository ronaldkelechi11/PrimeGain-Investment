const express = require("express");
const {createConnection} = require("mysql")
const bodyParser = require("body-parser")
const router = express.Router()

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
    console.log(req.body);

    function inputData() {
    connection.query(query, (err,result,fields)=>{
        if(err && err.errno == 1620){
        }
        else if(err == null){
          return "Succesful" 
        }
    });  
    }

    inputData();
    if(inputData === "Error"){
        console.log("Error");
    }
    else if(inputData === "Succesful"){
        console.log("Succesful");
    }
    
    return res.sendFile(__dirname + "./public/"); 
});

module.exports = router;