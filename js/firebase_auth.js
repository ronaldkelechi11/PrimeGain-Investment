console.log("Firebase Auth");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBYBN1JHtnQnBj8Jt7a58je2uaufbKT0qU",
    authDomain: "primegaininvestment-bc2ba.firebaseapp.com",
    projectId: "primegaininvestment-bc2ba",
    storageBucket: "primegaininvestment-bc2ba.appspot.com",
    messagingSenderId: "295060299707",
    appId: "1:295060299707:web:7b80894f9bc5398d53ee9e",
    measurementId: "G-1CJD0M074F"
};

const auth = getAuth();
function createNewUser() {
  //Initialization
  let username = document.getElementById("username");
  let number = document.getElementById("number");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let re_password = document.getElementById("re_password");

  // Value
  let usernametxt = document.getElementById("username").value;
  let numbertxt = document.getElementById("number").value;
  let emailtxt = document.getElementById("email").value;
  let passwordtxt = document.getElementById("password").value;
  let re_passwordtxt = document.getElementById("re_password").value;

  createUserWithEmailAndPassword(auth, emailtxt, passwordtxt)
  .then((userCredential) => {
    console.log("Signed In");
    // Signed in 
    const user = userCredential.user;
    window.location.href = 'dashboard.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  return false;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
