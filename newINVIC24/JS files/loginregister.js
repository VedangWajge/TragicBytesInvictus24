// Your web app's Firebase configuration
var firebaseConfig = {
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  full_name = document.getElementById("full_name").value;
  confirm_password = document.getElementById("confirm_password ").value;

  // Validate input fields
  if (
    validate_email(email) == false ||
    validate_password(password) == false ||
    validate_confirm_password(confirm_password) == false
  ) {
    alert("Email or Password is Outta Line!!");
    return;
    // Don't continue running the code
  }
  if (validate_field(full_name) == false) {
    alert("One or More Extra Fields is Outta Line!!");
    return;
  }

  //       // Check if passwords match
  //       if (password !== confirm_Password) {
  //         alert("Passwords do not match.");
  //         return;
  //         }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        full_name: full_name,

        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).set(user_data);

      // DOne
      alert("User Created!!");
      redirectToLog();
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Outta Line!!");
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);

      // DOne
      alert("User Logged In!!");
      redirectToHome();
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_confirm_password(confirm_password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
function redirectToReg() {
  window.location.href = "register.html";
}
function redirectToIndex() {
  window.location.href = "index.html";
}
function redirectToProfile() {
  window.location.href = "profile.html";
}
function redirectToHome() {
  window.location.href = "home.html";
}

function redirectToLog() {
  window.location.href = "login.html";
}
function redirectToResume() {
  window.location.href = "resume.html";
}
function redirectToAbout() {
  window.location.href = "about.html";
}
function showOptions(element) {
  const optionsWindow = element.querySelector('.options-window');
  optionsWindow.style.display = 'block';
}

function hideOptions() {
  const optionsWindows = document.querySelectorAll('.options-window');
  optionsWindows.forEach(window => {
      window.style.display = 'none';
  });
}

