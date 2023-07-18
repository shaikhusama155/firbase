// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMTPAhUuVd66aqZyqHLAXpeZu2-RoF3y0",
  authDomain: "first-project-2233.firebaseapp.com",
  projectId: "first-project-2233",
  storageBucket: "first-project-2233.appspot.com",
  messagingSenderId: "835896955200",
  appId: "1:835896955200:web:03f9377b73f0edd6d9aaa5",
  measurementId: "G-198NB1HHQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const loginbutton = document.getElementById("login")
const signupbutton = document.getElementById("signup")
const mainE = document.getElementById("email")
const mainP = document.getElementById("password")
const forgetpass = document.getElementById("forgetpas")
const logoutbutton = document.getElementById('logout')



signupbutton.addEventListener("click", () => {
  var email = mainE.value
  var password = mainP.value
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert("account create now you can login in this account")
    })
    .catch((error) => {
      const errorCode = error.code;
      document.getElementById("error").innerHTML = error.message
      // ..
    });
})

loginbutton.addEventListener("click", () => {
  var email = mainE.value
  var password = mainP.value
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      location.replace("welcome.html")
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      document.getElementById("error").innerHTML = error.message
      // ..
    });
})

forgetpass.addEventListener(("click", () => {
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert("Reset link sent to your email id")
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message
    });
}))


onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("user").innerHTML = "Hello, " + user.email;
  } else {
    location.replace("index.html");
  }
});

logoutButton.addEventListener("click", () => {
  firebase.auth().signOut().then(() => {
    location.replace("index.html");
  }).catch((error) => {
    console.error("Logout error:", error);
  });
});

