import { getAuth } from "./firebase.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"
let loginbtn = getElementById("login").value
let signupbtn = getElementById("signup").value
let forgetbtn = getElementById("signup").value


const auth = getAuth();
auth.onAuthStateChanged((user) => {
    if (user) {
        location.replace("welcome.html");
    }
});
loginbtn.addEventListener(("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message;
        })
}))

signupbtn, addEventListener(("click", () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        })
}))


forgetbtn.addEventListener(("click", () => {
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Reset link sent to your email id")
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}))
