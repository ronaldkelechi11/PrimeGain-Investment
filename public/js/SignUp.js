document.getElementById("backToIndex").addEventListener("click", () => {
    window.location = "/";
});

document.getElementById("goToSignIn").addEventListener("click", () => {
    console.log("Go to Sign In");
    window.location = "Sign In.html";
})

// Sign Up button OnClick
document.addEventListener("submit", (e) => {
    var mockDate = new Date().toLocaleDateString('en-US', ({ year: 'numeric', month: 'long', day: '2-digit' }));
    localStorage.setItem("name", document.getElementById("name").value)
    localStorage.setItem("email", document.getElementById("email").value)
    localStorage.setItem("dateCreated", mockDate)
    localStorage.setItem("tel", document.getElementById("tel").value)

    setTimeout(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("http://localhost:4000/Sign Up.html/apiSignUp", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                if (result === "Error") {
                    console.log("Displaying error");
                    document.getElementById("email").setAttribute("class", "error");
                    alert("Email Has already registered with PrimeGain")
                    setTimeout(() => {
                        document.getElementById("email").setAttribute("class", "");
                    }, 3000);
                    return false;
                }
                else if (result === "Succesful") {
                    window.location = 'Sign%20In.html'
                }
            })
            .catch(error => console.log('error', error));
    }, 1000);

}
);

