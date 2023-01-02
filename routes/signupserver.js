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

    var data = "";
    function checkError() {
        connection.query(query,(err,result,fields)=>{
            result = data
            console.log(result);
            return data;
        });
    }

    console.log(checkError());
    //TODO: Build a function that'll return a fucntion and the function will tell if t go back to index or login page
});

module.exports = router;