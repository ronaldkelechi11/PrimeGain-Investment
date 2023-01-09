document.getElementById("backToIndex").addEventListener("click",()=>{
    window.location = "/";
});

document.getElementById("goToSignIn").addEventListener("click", ()=>{
    console.log("Go to Sign In");
    window.location = "signIn.html";
})

// Sign Up button OnClick
document.addEventListener("submit", (e)=>{
    localStorage.setItem("name", document.getElementById("name").value)
    localStorage.setItem("email", document.getElementById("email").value)
    localStorage.setItem("tel", document.getElementById("tel").value)

    setTimeout(() => {
       var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          fetch("http://localhost:4000/signUp.html/apiSignUp", requestOptions)
            .then(response => response.text())
            .then(result => {
                if(result === "Error"){
                    console.log("Displaying error");
                    document.getElementById("email").setAttribute("class","error");
                     alert("Email Has already registered with PrimeGain")
                        setTimeout(() => {
                            document.getElementById("email").setAttribute("class",""); 
                        }, 3000);
                    return false;
                }
                else if(result === "Succesful"){
                    window.location = "signIn.html"
                }
            })
            .catch(error => console.log('error', error)); 
    }, 1000);
        
    
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

