// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export  const auth = getAuth(app);