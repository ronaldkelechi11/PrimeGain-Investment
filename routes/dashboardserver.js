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
router.put("/:username", (req, res) => {
    var username = req.params.username;
    var countquery = "SELECT email, COUNT(*) FROM users;"
    connection.query(countquery, (err, result) => {
        var JsonResult = JSON.parse(JSON.stringify(result))
        res.send(JsonResult[0])
    });
});

module.exports = router