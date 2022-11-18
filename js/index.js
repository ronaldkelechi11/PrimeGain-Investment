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
 document.getElementById("emailLogin").value = null;
 document.getElementById("passwordLogin").value = null;
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
  var uname = document.getElementById("username");
  var pnumber = document.getElementById("number");
  var emailtxt = document.getElementById("email");
  var passwordtxt =  document.getElementById("password");
  var rePassword = document.getElementById("re_password");

  //Color Codes
  var errorRed = "#cc3c3c";
  var successGreen = "#60dd60";

  //Button Declaration
  var button = document.getElementById("registerButton");

  //Front End Validation
  if(uname.value.length <= null){
    alert("Username cannot be blank");
  }
  if(pnumber.value.length <= null){
    alert("Passord field cannot be blank");
  }
  if(pnumber.value.startsWith("0")){
    console.log(pnumber.value.replace("0","+234"));
    pnumber = pnumber.value.replace("0","+234");
  }
  if(emailtxt.value.length <= 0){
    alert("Email field cannot be empty")
  }
  if(passwordtxt.value.length <= 0){
    alert(("password cannot be empty"))
  }
  if(passwordtxt.value != rePassword.value){
    alert("Passwords do not match")
  }

  else{
    button.innerText = "Loading...";
    button.style.backgroundColor = "#03b076";

    //Storing Info in local storage
    localStorage.setItem("userName", uname.value);
    localStorage.setItem("userEmail", emailtxt.value);
    localStorage.setItem("phoneNumber", pnumber);

    window.location = "/dashboard.html";

    var templateParams = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      phone_number: document.getElementById("number").value,
  }; 
  emailjs.send('gmail', 'primegain_template', templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         window.location = "/dashboard.html";
      }, function(error) {
         console.log('FAILED...', error);
         alert("Failed to Register User")
      });
  }
  
}












