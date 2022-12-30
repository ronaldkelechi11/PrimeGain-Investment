const { url } = require("inspector");

document.getElementById("backToIndex").addEventListener("click",(e)=>{
    window.location = "/";
});

document.getElementById("goToSignIn").addEventListener("click", ()=>{
    console.log("Go to Sign In");
    window.location = "signIn.html";
})

// To make sure that the input fields are empty of start
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("tel").value = null;
    document.getElementById("password").value = null;
});



// Sign Up button OnClick
document.addEventListener("submit", (e)=>{
    console.log("Still Clickable");

    var url = "localhost:3000/signUp.html"

    console.log(fetch(url).then(res => res.json));
    
//   var templateParams = {
//     username: document.getElementById("username").value,
//     email: document.getElementById("email").value,
//     phone_number: document.getElementById("tel").value,
// }; 
// emailjs.send('gmail', 'primegain_template', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//        window.location = "/dashboard.html";
//     }, function(error) {
//        console.log('FAILED...', error);
//        alert("Failed to Register User")
//     });
    }
);

