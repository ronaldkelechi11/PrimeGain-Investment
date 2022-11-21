console.log("Connected to Dashboard.js");

//Button Initialization
document.getElementById("btnDepo").addEventListener("click", deposit);
document.getElementById("btnWith").addEventListener("click", withdraw);

function deposit() {
    alert("Trying to make a deposit");
    return false;
}
function withdraw() {
    alert("Cannot Withdraw now");
    return false;
}