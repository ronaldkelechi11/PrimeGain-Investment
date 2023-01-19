// For all the values gotten from Local Storage
var userDate = document.getElementById("userDate");
userDate.innerHTML = localStorage.getItem("dateCreated");
var userName = document.getElementById("userUsername");
userName.innerHTML = localStorage.getItem("name");
var userEmail = document.getElementById("userEmailAddress");
userEmail.innerHTML = localStorage.getItem("email");


// Make a deposit button
document.getElementById("btnDepo").addEventListener("click", (e) => {
    var depoPage = document.getElementById("depoPage");
    depoPage.style.translate = "0vw";
    depoPage.style.visibility = "visible"
});


// Cancel Button depoPage
document.getElementById("cancelButton").addEventListener("click", (e) => {
    document.getElementById("depoPage").style.visibility = "hidden";
});

// Cancel Button PC
document.getElementById("cancelButtonPC").addEventListener("click", (e) => {
    document.getElementById("paymentCheckout").style.visibility = "hidden";
});

// Deposit Screen shift
document.getElementById("btnBronze").addEventListener("click", (e) => {
    var depoPage = document.getElementById("depoPage");
    var paymentCheck = document.getElementById("paymentCheckout");
    depoPage.style.translate = "-100vw";
    paymentCheck.style.translate = "0vw";
    paymentCheck.style.visibility = "visible";
});
