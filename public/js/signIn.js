document.getElementById("backToIndex").addEventListener("click", (e) => {
    window.location = "/";
});


document.getElementById("goToSignUp").addEventListener("click", (e) => {
    console.log("Go to SignUp");
    window.location = "Sign Up.html"
});

document.getElementById("signinButton").addEventListener("click", () => {
    setTimeout(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:4000/Sign%20In.html/apiSignIn", requestOptions)
            .then(response => response.text())
            .then(result => {
                var data = JSON.parse(result);
                console.log(data);
                //If is an admin Login
                if (data[0].email == "admin@primegain.com", data[0].password == "admin") {
                    console.log('Is admin');
                    if (data[0].password != "admin") {
                        alert("You are trying to Login as a Fake admin. Your Computer will be blocked.")
                        window.location = "/"
                    }
                    else {
                        window.location = "AdminDashboard.html"
                    }
                }
                // Normal User 
                else if (data != null) {
                    console.log('Normal User');
                    localStorage.setItem("name", data[0].username)
                    localStorage.setItem("email", data[0].email)
                    localStorage.setItem("tel", data[0].telephone)
                    localStorage.setItem("uid", data[0].id)
                    window.location = "dashboard.html"
                }
                //If user does not exist
                else if (data == null) {
                    console.log('User does not exist');
                    alert("Your Account does not seem to exist on our Database. Please create an account")
                    window.location = "/signUp.html"
                }
            })
            .catch(error => {
                alert("Error Signing In");
                window.location = "/Sign%20In.html"
            });
    }, 500);
});