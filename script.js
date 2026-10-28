
// Select the contact form and message area
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Run this function when the form is submitted
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Read the user's input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check that all fields contain information
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Display a confirmation message
    formMessage.textContent =
        "Thank you, " + name + "! Your form has been checked.";

    // Clear the form fields
    contactForm.reset();
});