const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()
const {createConnection} = require("mysql")
const { table } = require("console")

// Variables
var data = "___"

// Middleware
router.use(express.json())
router.use(express.urlencoded())

// Mysql Connection
const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "primegaininvestment"
});

router.post("/", (req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    var query = "SELECT * FROM `users` WHERE `email` = '"+ email + "' AND `password` = '"+ password +"';";

    connection.query(query,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            // All i need is a way to go through the data like a forEach statement
            // if(result == null){
            //     data = "Error"
            // }
            // else if(result == ""){

            // }
            // else{

            // }
        }
    });
})

router.get("/apiSingIn",(req,res)=>{
    res.send(data)
    console.log("Data Sent");
})

module.exports = router