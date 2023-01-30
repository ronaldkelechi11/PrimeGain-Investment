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


// RESTful routes
router.get("/", (req, res) => {
    res.send("404- No user attached")
})

router.get("/:id", (req, res) => {
    console.log("Badass");
    var id = req.params.id;
    var mainQuery = "SELECT * FROM `users` WHERE id = '" + id + "'";
    var countquery = "SELECT email, COUNT(*) FROM users;"


});

router.get("/:id/sender", (req, res) => {
    console.log("Sending");
    res.send("Hey")
})


module.exports = router