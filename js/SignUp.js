document.getElementById("backToIndex").addEventListener("click",(e)=>{
    window.location = "index.html";
});

document.getElementById("goToLogin").addEventListener("click", ()=>{
    window.location = "signIn.html";
});

// To make sure that the input fields are empty of start
document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("tel").value = null;
    document.getElementById("password").value = null;
});

// Sign Up button OnClick
document.getElementById("signupButton").addEventListener(
    "click", (e)=>{

    }
)


//   var templateParams = {
//     username: document.getElementById("username").value,
//     email: document.getElementById("email").value,
//     phone_number: document.getElementById("number").value,
// }; 
// emailjs.send('gmail', 'primegain_template', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//        window.location = "/dashboard.html";
//     }, function(error) {
//        console.log('FAILED...', error);
//        alert("Failed to Register User")
//     });