const express = require('express');
const router = express.Router()
const { createConnection } = require('mysql');

// Personal Variables
var jsonData = {}

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



// Restful Routes
router.get("/:id", (req, res) => {
    res.redirect("../public/Dashboard.html")
});

router.get("/:id/sender", (req, res) => {
    var id = req.params.id;
    var mainQuery = "SELECT * FROM `users` WHERE id = '" + id + "'";
    connection.query(mainQuery, (err, result) => {
        jsonData = JSON.stringify(result)
        console.log(jsonData);
    })
    res.send(jsonData)
})

// 404 PAGE TO SEND IF NO UID IS PROVIDED IN THE URL
router.get("/", (req, res) => {
    res.redirect("/404.html")
})



module.exports = router