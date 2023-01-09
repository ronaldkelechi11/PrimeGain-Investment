const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()
const {createConnection} = require("mysql")

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

module.exports = router;
