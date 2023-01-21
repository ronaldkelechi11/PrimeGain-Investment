// Import Packages
const express = require("express")
const { createConnection } = require("mysql")
const bodyParser = require("body-parser")
const { json } = require("body-parser");

// Express App Initialization
const app = express();

//Personal Values
const port = 4000;

// Routes
const signUpRoute = require("./routes/signupserver.js")
const signInRoute = require("./routes/signinserver.js")
const adminDashboardRoute = require("./routes/adminDashboardServer")

// Assigning Routes
app.use("/Sign%20Up.html", signUpRoute)
app.use("/Sign%20In.html", signInRoute)
app.use("/Admin Dashboard", adminDashboardRoute)

// Middleware
app.use(express.static("./"))
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded());

// Mysql Connection Details
const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "primegaininvestment"
});

// To test connection to Mysql Server
connection.connect((err) => {
    if (err) {
        console.log("Connection to Mysql DB failed" || "Please put on MySql Server");
    }
    else {
        console.log("Connected to Mysql Server");
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// For Refferals
app.get("/refferal/:username", (req, res) => {
    var username = req.params.username;
    var data = "__"

    /*To first check if the User actually exists in the refferal Program    
     Then if not create a new user with refferalNumber 1
     then if the user is already a refferal increase refferalAmount by 1
     then send message to user that new refferal has been added to him
     TODO: Learn Nodemailer
     */
    var searchQuery = "SELECT * FROM `refferals` WHERE `username` =" + " '" + username + "'";
    var insertNewRefferal = "INSERT INTO `refferals`(`username`, `refferalAmmout`) VALUES ('" + username + "', '1');";

    // Increment function
    function increment(params) {
        return ++params;
    }

    connection.query(searchQuery, (err, result, fields) => {
        var myVar = JSON.parse(JSON.stringify(result));
        console.log(myVar);
        if (myVar[0] == null) {
            console.log("User does not exist");
            connection.query(insertNewRefferal, (err, result, fields) => {
                if (err) console.log(err);
                else res.sendFile(__dirname + "/public/New Refferal.html")
            });
        }
        else if (myVar[0] != null) {
            console.log("User exist");
            var updateQuery = "UPDATE `refferals` SET `refferalAmount`= '" + increment(myVar[0].refferalAmount) + "' WHERE `username` = '" + myVar[0].username + "'";
            connection.query(updateQuery, (err, result, fields) => {
                if (err) console.log(err);
                else res.sendFile(__dirname + "/public/New Refferal.html")
            });
        }
    });
});

// App port listen function
app.listen(port, (res) => {
    console.log("Server is online on port: " + port);
});