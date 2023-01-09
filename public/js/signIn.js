document.getElementById("backToIndex").addEventListener("click",(e)=>{
    window.location = "/";
});


document.getElementById("goToSignUp").addEventListener("click", (e)=>{
    console.log("Go to SignUp");
    window.location = "signUp.html"
});

document.getElementById("signinButton").addEventListener("click",()=>{
    setTimeout(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:4000/signIn.html/apiSignIn", requestOptions)
            .then(response => response.text())
            .then(result => {
                var data = JSON.parse(result);
                //If is an admin Login
                if(data[0].email == "admin@primegain.com" && data[0].password == "admin"){
                    if(data[0].password != "admin"){
                        alert("You are trying to Login as a Fake admin. Your Computer will be blocked.")
                        window.location = "/"
                    }
                    else{
                        window.location = "AdminDashboard.html"
                    } 
                }
                // Normal User 
                else if(data != null){
                    localStorage.setItem("name", data[0].username)
                    localStorage.setItem("email", data[0].email)
                    localStorage.setItem("tel", data[0].telephone)
                    window.location = "dashboard.html"
                }
                //If user does not exist
                else{
                    alert("Your Account does not seem to exist on our Database. Please create an account")
                    window.location = "/signUp.html"
                }
            })
            .catch(error => console.log('error', error));
    }, 500);
});