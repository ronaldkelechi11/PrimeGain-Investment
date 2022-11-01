
function createAccountAppear() {
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


// HideScreen Funcition
function hideScreen() {
  var screen = document.getElementById("createanaccount");
  var isVisibile = screen.style.visibility="visible";
  
  if(isVisibile){
    screen.style.visibility = "hidden";
  }
  return false;
}

function createNewUser() {
  //Variable Colors
  var red = "#cc3c3c";
  var green = "#60dd60"; 

  //Initialization
  var username = document.getElementById("username");
  var number = document.getElementById("number");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var re_password = document.getElementById("re_password");

  // Value
  var usernametxt = document.getElementById("username").value;
  var numbertxt = document.getElementById("number").value;
  var emailtxt = document.getElementById("email").value;
  var passwordtxt = document.getElementById("password").value;
  var re_passwordtxt = document.getElementById("re_password").value;

  //Redirection 
  window.location.href = 'dashboard.html';

  return false;
}