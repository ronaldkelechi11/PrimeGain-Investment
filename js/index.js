//Button Initialization
document.getElementById("reg").addEventListener("click", hideRegister);
document.getElementById("log").addEventListener("click", hideLogin);
document.getElementById("cancelButton").addEventListener("click", hideRegisterScreen);
document.getElementById("cancelButtonLogin").addEventListener("click", hideLoginScreen);
document.getElementById("registerButton").addEventListener("click", registerUser);




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

function registerUser() {
  //Input fields
  var uname = document.getElementById("username").value;
  var pnumber = document.getElementById("number").value;
  var emailtxt = document.getElementById("email").value;
  var passwordtxt =  document.getElementById("password").value;
  var rePassword = document.getElementById("re_password").value;

  //Color Codes
  var errorRed = "#cc3c3c";
  var successGreen = "#60dd60";

  //Button Declaration
  var button = document.getElementById("registerButton");
  console.log(uname.length);

  //Front End Validation
  if(uname.length <= null){
    alert("Username cannot be blank");
  }
  if(pnumber.length <= null){
    alert("Passord field cannot be blank");
  }
  if(emailtxt.length <= 0){
    alert("Email field cannot be empty")
  }
  if(passwordtxt.length <= 0){
    alert(("password cannot be empty"))
  }
  if(passwordtxt = rePassword){
    alert("Passwords do not match")
  }

  // createUserWithEmailAndPassword(auth,emailtxt,passwordtxt)
  //       .then((userCredential) => {
  //           console.log("Signing In");
  //           const user = userCredential.user;
  //           window.location.href = '/dashboard.html';
  //       })
  //       .catch((error) => {
  //           const errorCode = error.code;
  //           const errorMessage = error.message;
  //           alert(errorMessage)
  //       });
}












