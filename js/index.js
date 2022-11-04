document.getElementById("sup").addEventListener("click", appear);
function appear() {
  var screen = document.getElementById("createanaccount");
  var isVisibile = screen.style.visibility="visible";

  //To make sure that input is always blank
 document.getElementById("username").value = null;
 document.getElementById("number").value = null;
 document.getElementById("email").value = null;
 document.getElementById("password").value = null;
 document.getElementById("re_password").value = null;
 console.log("Cleared");


  if(isVisibile){
    screen.style.visibility = "visible";
  }
  return false;
}



document.getElementById("cancelButton").addEventListener("click", hideScreen);
function hideScreen() {
  var screen = document.getElementById("createanaccount");
  var isVisibile = screen.style.visibility="visible";
  
  if(isVisibile){
    screen.style.visibility = "hidden";
  }
  return false;
}

doneButton.addEventListener("click", (e) =>{
  alert("Do you agree to our terms and conditions?")
  window.location = "/dashboard.html";
});










