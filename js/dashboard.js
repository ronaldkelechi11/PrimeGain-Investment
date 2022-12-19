// For all the values gotten from Local Storage
var userPhone = document.getElementById("userNumber");
                userPhone.innerHTML = localStorage.getItem("phoneNumber");
var userName = document.getElementById("userUsername");
                userName.innerHTML = localStorage.getItem("userName");
var userEmail = document.getElementById("userEmailAddress");
userEmail.innerHTML = localStorage.getItem("userEmail");


// Make a deposit button
document.getElementById("btnDepo").addEventListener("click",(e)=>{
        document.getElementById("depoPage").style.visibility = "visible"});

// Cancel Button
document.getElementById("cancelButton").addEventListener("click",(e)=>{
    document.getElementById("depoPage").style.visibility = "hidden";
});

// Deposit Screen shift
document.getElementById("btnBronze").addEventListener("click",(e)=>{
   var depoPage = document.getElementById("depoPage");
   var paymentCheck = document.getElementById("paymentCheckout");
   depoPage.style.translate="-100vw";
   paymentCheck.style.visibility = "visible";
   paymentCheck.style.translate = "100vw";
});
