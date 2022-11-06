document.getElementById("reg").addEventListener("click", hideRegister);
document.getElementById("log").addEventListener("click", hideLogin);

document.getElementById("cancelButton").addEventListener("click", hideRegisterScreen);
document.getElementById("cancelButtonLogin").addEventListener("click", hideLoginScreen);




//For Register page Visibility Toggle
function hideRegister() {
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


//For Login Page visibilty toogle
function hideLogin() {
  var screen = document.getElementById("loginaccount");
  var isVisibile = screen.style.visibility="hidden";

  //To make sure that input is always blank
 document.getElementById("username").value = null;
 document.getElementById("email").value = null;
 document.getElementById("password").value = null;
 console.log("Cleared");


  if(isVisibile){
    screen.style.visibility = "visible";
  }

  return false;
}

function hideRegisterScreen() {
  var screen = document.getElementById("createanaccount");
  var isVisibile = screen.style.visibility="visible";

  if(isVisibile){
    screen.style.visibility = "hidden";
  }

  return false;
}

function hideLoginScreen() {
  var screen = document.getElementById("loginaccount");
  var isVisibile = screen.style.visibility="visible";

  if(isVisibile){
    screen.style.visibility = "hidden";
  }

  return false;
}












