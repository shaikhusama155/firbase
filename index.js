// import { auth ,initializeApp} from "./firebase/auth";
// import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// let loginbutton = getElementById("login")
// let signupbutton = getElementById("signup")
// let forgetbtn = getElementById("forgetpas")
// const getEmail = document.getElementById("email")
// const getPassword = document.getElementById("password")

// signupbutton.addEventListener('click', ()=>{
//     const userE = getEmail.value 
//     const userP = getPassword.value
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log('create account');
//     alert('Account created')
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     document.getElementById("error").innerHTML = error.message;  
//   });
// })
// import { auth } from "./firebase"
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"


// let loginbutton = getElementById("login")
// let signupbtn = getElementById("signup")
// let forgetbtn = getElementById("forgetpas")
// const email = document.getElementById("email")
// const password = document.getElementById("password")

// signupbutton.addEventListener('click', () => {
//     const getEmail = email.value
//     const getPass = password.value
//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert('account created')
//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });

// })

// loginbutton.addEventListener('click', () => {
//     const getEmail = email.value
//     const getPass = password.value
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             alert('succussfully Login')
//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             document.getElementById("error").innerHTML = error.message;
//         });
// })

// // import { getAuth } from "./firebase.js";
// // import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"


// // auth.onAuthStateChanged((user) => {
// //     if (user) {
// //         location.replace("welcome.html");
// //     }
// // });
// // loginbtn.addEventListener(("click", () => {
// //     signInWithEmailAndPassword(auth, email, password)
// //         .catch((error) => {
// //             document.getElementById("error").innerHTML = error.message;
// //         })
// // }))

// // signupbtn, addEventListener(("click", () => {
// //     const email = document.getElementById("email").value
// //     const password = document.getElementById("password").value
// //     firebase.auth().createUserWithEmailAndPassword(email, password)
// //         .catch((error) => {
// //             document.getElementById("error").innerHTML = error.message
// //         })
// // }))


// // forgetbtn.addEventListener(("click", () => {
// //     firebase.auth().sendPasswordResetEmail(email)
// //         .then(() => {
// //             alert("Reset link sent to your email id")
// //         })
// //         .catch((error) => {
// //             document.getElementById("error").innerHTML = error.message
// //         });
// // }))
