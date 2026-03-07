/**
 * @file user-registration.js
 * @description Handles new user registration via the registration form.
 */

const registrationForm = document.getElementById("register-form");

/**
 * Handle registration form submission.
 * Validates and sends new user credentials to the server.
 */
registrationForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        // Send registration request to the server
        const response = await fetch("/registerUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Registration Successful:", data.message);
            // Redirect to login page after successful registration
            window.location.href = "/pages/login-page.html";
        } else {
            console.error("registration failed", data.message);
            // Display error message (e.g., username already exists)
            const errorMsg = document.getElementById("error-msg");
            if (errorMsg) {
                errorMsg.textContent = data.message;
                errorMsg.style.display = "block";
            }
        }
    } catch (error) {
        console.error("Error during registration:", error);
    }

});