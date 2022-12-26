const express = require("express")
const {createConnection} = require("mysql")
const bodyParser = require("body-parser")

const port = 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Mysql Connection Details
const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "primegaininvestment"
});

const app = express()

app.post("signUp.html", (req,res)=>{
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;

    connection.connect(err=>{
        if (err) throw err;
        console.log("connected");

        var sql = "INSERT INTO `users`(`id`, `username`, `email`, `telephone`, `password`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]')";
        con.query(sql, function (err) {
            if (err) throw err;
            console.log("One record inserted");
        });
    })
});

app.listen(port)