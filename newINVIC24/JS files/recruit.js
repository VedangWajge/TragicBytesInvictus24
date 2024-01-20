document.getElementById('jobPostForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
 });
 
 document.getElementById('additionalInfo').addEventListener('click', function(e) {
    e.preventDefault();
    // Toggle additional information content
    var content = document.getElementById('additionalInfoContent');
    if (content.style.display === "none") {
        content.style.display = "block";
        this.textContent = "Additional Information -";
    } else {
        content.style.display = "none";
        this.textContent = "Additional Information +";
    }
 });
 
 document.getElementById('textFormat').addEventListener('click', function(e) {
    e.preventDefault();
    // Handle text formatting options, e.g., bold, italic, etc.
 });