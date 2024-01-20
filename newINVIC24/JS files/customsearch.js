// Dummy data for internship listings
// const internships = [
//     {
//         title: "Internshala Student Partner",
//         duration: "7 Weeks",
//         stipend: "Unpaid"
//     },
//     {
//         title: "INTERNSHALA Work From Home",
//         duration: "7 Weeks",
//         stipend: "Unpaid"
//     },
//     {
//         title: "Robotics ERIC Robotics PSIPIL",
//         location: "Wasuli, Chinchwad, Pune, Chakan",
//         stipend: "Unpaid"
//     }
// ];

// Function to display internships
function displayInternships() {
    const internshipList = document.getElementById("internshipList");
    internshipList.innerHTML = ""; // Clear previous listings

    internships.forEach(internship => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${internship.title}</h3>
            <p>${internship.duration || internship.location}</p>
            <p>DURATION: ${internship.duration || "Performance Based internship"}</p>
            <p>STIPEND: ${internship.stipend || "Unpaid"}</p>
            <p>View details</p>
        `;
        internshipList.appendChild(listItem);
    });
}

// Function to apply filters (dummy function)
function applyFilters() {
    alert("Filters applied!");
}

// Function to clear filters (dummy function)
function clearFilters() {
    alert("Filters cleared!");
}

// Function to search internships (dummy function)
function searchInternships() {
    alert("Searching internships!");
}

// Display internships on page load
document.addEventListener("DOMContentLoaded", () => {
    displayInternships();
});

function viewDetails() {
    alert('Viewing Details');
}
