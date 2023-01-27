const express = require('express');
const router = express.Router()
const { createConnection } = require('mysql');

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

// RESTful routes
router.get("/:id", (req, res) => {
    res.redirect("/public/Dashboard.html")
    var id = req.params.id;
    var mainQuery = "SELECT * FROM `users` WHERE id = '" + id + "'";
    var countquery = "SELECT email, COUNT(*) FROM users;"
    connection.query(mainQuery, (err, result) => {
        console.table(JSON.stringify(result));
    });
});

module.exports = router