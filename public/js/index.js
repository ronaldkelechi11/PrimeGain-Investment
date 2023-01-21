//Button Initialization
document.getElementById("reg").addEventListener("click", () => {
  window.location = "Sign Up.html"
});


document.getElementById("log").addEventListener("click", () => {
  window.location = "Sign In.html"
});

// Should link to dashboard where you get actually get the code
document.getElementById("refferalLink").addEventListener("click", () => {
  var refferalValue = 'localhost:4000/refferal/' + localStorage.getItem("name");
  console.log(refferalValue)
});













