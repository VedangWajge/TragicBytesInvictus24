// profile.js

// Function to handle the click event of the "Save changes" button
function saveChanges() {
    // Get values from the form elements
    var username = document.getElementById('username').value;
    var bio = document.querySelector('#account-info textarea').value;
    var country = document.querySelector('#account-info select').value;

    // Perform any additional actions or send data to the server as needed
    // For demonstration purposes, we'll log the values to the console
    console.log('Username:', username);
    console.log('Bio:', bio);
    console.log('Country:', country);

    // You can add your logic to send data to the server or perform other actions here
}

// Attach the function to the "Save changes" button click event
document.addEventListener('DOMContentLoaded', function () {
    var saveButton = document.querySelector('.btn.btn-primary');
    if (saveButton) {
        saveButton.addEventListener('click', saveChanges);
        alert("Changes saves successfully");
    }
});
