const { Router } = require("express")
const express = require("express")
const router = express.Router()
const {createConnection} = require("mysql")

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

router.get("/",(req,res)=>{
    res.send("Get Request")
})

router.post("/", (req,res)=>{
    res.send("Working")
})

module.exports = router