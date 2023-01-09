const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()
const {createConnection} = require("mysql")

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
            data = JSON.parse(JSON.stringify(result))
        }
    });
})

router.get("/apiSignIn",(req,res)=>{
    res.send(data)
    console.log("Data Sent SignIn");
})

module.exports = router