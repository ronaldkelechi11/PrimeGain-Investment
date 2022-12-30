const express = require("express")
const router = express.Router

router.get('/',(req,res)=>{
    res.send("Sign Up Page get Request")
});

router.post("/signUp.html",(req,res)=>{
    var username = req.body.name;
    var email = req.body.email;
    var telephone = req.body.tel;
    var password = req.body.password;

    var query = "INSERT INTO `users`(`id`, `username`, `email`, `telephone`, `password`) VALUES ('id','"+ username +"','"+email+"','"+telephone+"','"+password+"')";
    connection.query(query, (err,result,fields)=>{
        if(err && err.errno == 1620){
            console.log("ERROR");
            data.push(err.errno);
            console.log(data); 
            res.json(data);  
        }
        else{
            res.sendFile(__dirname + "/public/signIn.html");     
        } 
    });
});


module.exports = router;