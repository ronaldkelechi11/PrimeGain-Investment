// For all the values gotten from Local Storage
var userDate = document.getElementById("userDate");
userDate.innerHTML = localStorage.getItem("dateCreated");
var userName = document.getElementById("userUsername");
userName.innerHTML = localStorage.getItem("name");
var userEmail = document.getElementById("userEmailAddress");
userEmail.innerHTML = localStorage.getItem("email");

var refLink = document.getElementById("refferalLink");
refLink.innerHTML = 'localhost:4000/refferal/' + localStorage.getItem("name");

// Fetch the num Refs from the mysql db 
var numRefs = document.getElementById("numRefferals")


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

// Deposit Screen shift bronze
document.getElementById("btnBronze").addEventListener("click", (e) => {
    var depoPage = document.getElementById("depoPage");
    var paymentCheck = document.getElementById("paymentCheckout");
    depoPage.style.translate = "-100vw";
    paymentCheck.style.translate = "0vw";
    paymentCheck.style.visibility = "visible";
});

// Deposit Screen shift silver
document.getElementById("btnSilver").addEventListener("click", () => {
    var depoPage = document.getElementById("depoPage");
    var paymentCheck = document.getElementById("paymentCheckout");
    depoPage.style.translate = "-100vw";
    paymentCheck.style.translate = "0vw";
    paymentCheck.style.visibility = "visible";
});

// Deposit Screen shift gold
document.getElementById("btnGold").addEventListener("click", () => {
    var depoPage = document.getElementById("depoPage");
    var paymentCheck = document.getElementById("paymentCheckout");
    depoPage.style.translate = "-100vw";
    paymentCheck.style.translate = "0vw";
    paymentCheck.style.visibility = "visible";
});
