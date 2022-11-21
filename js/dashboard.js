console.log("Connected to Dashboard.js");

var btnDepo = document.getElementById("btnDepo");
var closeButton = document.getElementById("cancelButton");

btnDepo,addEventListener("click",function () {
  var depoPageScreen = this.document.getElementById("depoPage");

  depoPageScreen.style.visibility = "visible"
});

closeButton.addEventListener("click", function () {
    var depoPageScreen = this.document.getElementById("depoPage");
    depoPageScreen.style.visibility = "hidden"
});