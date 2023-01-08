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

    console.log(req.body);
})

router.get("/apiSingIn",(req,res)=>{

})

module.exports = router