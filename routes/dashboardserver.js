const express = require('express');
const router = express.Router()
const { createConnection } = require('mysql');

// Personal Variables
var apiTransfer = ({});
// middleware
router.use(express.json());
router.use(express.urlencoded());

// Mysql Connection Details
const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "primegaininvestment",
});

var jsonData = {}
router.get("/:id", (req, res) => {
    var id = req.params.id;
    console.log(id);

    // CREATE IF-ELSE TO CHECK IF ID IS STRING OR INT

    var mainQuery = "SELECT * FROM `users` WHERE id = '" + id + "'";
    connection.query(mainQuery, (err, result) => {
        jsonData = JSON.stringify(result)
        console.log(jsonData);
    })
    res.redirect("../public/Dashboard.html")
});

// 404 PAGE TO SEND IF NO UID IS PROVIDED IN THE URL
router.get("/", (req, res) => {
    res.redirect("/404.html")
})

router.get("/:id/sender", (req, res) => {
    res.send(jsonData)
})


module.exports = router