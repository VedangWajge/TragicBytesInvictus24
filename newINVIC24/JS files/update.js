import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAxN0JEihvLN0T-0X_PFUjnFJH-T34CZvg",
    authDomain: "greengadget-c7202.firebaseapp.com",
    databaseURL:
        "https://greengadget-c7202-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "greengadget-c7202",
    storageBucket: "greengadget-c7202.appspot.com",
    messagingSenderId: "654816383082",
    appId: "1:654816383082:web:2c83d45cd83d3191153a13",
    measurementId: "G-VSE5VNYYEX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const user = auth.currentUser;

function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;
    console.log(userEmail);

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userProfilePicture;

}

onAuthStateChanged(auth, (user) => {
    if(user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    
    }else {
        alert("Create Account & login");
        
    }
});