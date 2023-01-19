const express = require("express");
const { createConnection } = require("mysql")
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

router.post("/", (req, res) => {
    var username = req.body.name;
    var email = req.body.email;
    var telephone = req.body.tel;
    var password = req.body.password;
    var dateCreated = new Date().toLocaleDateString('en-US', ({ year: 'numeric', month: 'long', day: '2-digit' }))
    var query = "INSERT INTO `users`(`id`, `username`, `email`, `telephone`,`dateCreated`, `password`) VALUES ('id','" + username + "','" + email + "','" + telephone + "','" + dateCreated + "','" + password + "')";

    connection.query(query, (err, result, fields) => {
        if (err) {
            console.log(err);
            data = "Error";
            return false;
        }
        else {
            console.log(result);
            data = "Succesful"
            return false;
        }
    });
});

router.get("/apiSignUp", (req, res) => {
    res.send(data)
    console.log("Data Sent SignUp");
});

module.exports = router;
