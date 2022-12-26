import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

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
const app = initializeApp(firebaseConfig);

export function cuweap(params) {
    createUserWithEmailAndPassword(auth,emailtxt,passwordtxt)
    .then((userCredential) => {
        console.log("Signing In");
        const user = userCredential.user;
        window.location.href = '/dashboard.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });
  }
