
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const auth = getAuth();
const logoutbutton = document.getElementById('logout')



function logout() {
  firebase.auth().signOut()
}
