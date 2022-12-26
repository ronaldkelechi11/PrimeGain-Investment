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

connection.query("SELECT * FROM users", (err,result,fields)=>{
    if(err){
        console.log(err);
    }
    return console.log(result);
});

app.listen(port)