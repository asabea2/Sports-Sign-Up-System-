import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAJG2-zWREG2-C5LBl2QM8bCu7Eq4kG6dA",
    authDomain: "csia-e9a71.firebaseapp.com",
    projectId: "csia-e9a71",
    storageBucket: "csia-e9a71.appspot.com",
    messagingSenderId: "740834778744",
    appId: "1:740834778744:web:c00dc5bbfe00ac435f578d"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const provider = new GoogleAuthProvider();


  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    alert()
  })



