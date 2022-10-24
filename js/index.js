function createAccountAppear() {
  var screen = document.getElementById("createanaccount");
  var isVisibile = screen.style.visibility="hidden";
  
  
  if(isVisibile){
    screen.style.visibility = "visible";
  }
  return false;
}

function hideScreen() {
  var screen = document.getElementById("createanaccount");
  var isVisibile = screen.style.visibility="visible";
  
  
  if(isVisibile){
    screen.style.visibility = "hidden";
  }
  return false;
}