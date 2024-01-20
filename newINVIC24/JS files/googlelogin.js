import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAxN0JEihvLN0T-0X_PFUjnFJH-T34CZvg",
    authDomain: "greengadget-c7202.firebaseapp.com",
    databaseURL: "https://greengadget-c7202-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "greengadget-c7202",
    storageBucket: "greengadget-c7202.appspot.com",
    messagingSenderId: "654816383082",
    appId: "1:654816383082:web:2c83d45cd83d3191153a13",
    measurementId: "G-VSE5VNYYEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn")
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "landing.html";

        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
        });

})

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;

}

updateUserProfile();