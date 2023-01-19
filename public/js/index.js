//Button Initialization
document.getElementById("reg").addEventListener("click", () => {
  window.location = "signUp.html"
});


document.getElementById("log").addEventListener("click", () => {
  window.location = "signIn.html"
});

document.getElementById("refferalLink").addEventListener("click", () => {
  var refferalValue = 'localhost:4000/refferal/' + localStorage.getItem("name");
  console.log(refferalValue)
});












