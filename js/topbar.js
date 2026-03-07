/**
 * @file topbar.js
 * @description Manages the top bar component, including user profile display, dropdown menu, and logout functionality.
 */

import {loadComponent} from "./utils.js";
import {initTicketForm} from "/js/ticket-form-handler.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Load the top bar component HTML
    await loadComponent("#topbar", "/components/topbar.html");

    const profilePic = document.getElementById("profile-pic");
    const userDropdown = document.getElementById("user-dropdown");
    
    // Retrieve user data from sessionStorage, default to Guest if not found
    const storedUser = sessionStorage.getItem("userData");
    const user = storedUser ? JSON.parse(storedUser) : {username: "Guest"};

    if (profilePic && userDropdown) {
        // Toggle user dropdown menu visibility on profile picture click
        profilePic.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up and closing the dropdown immediately
            userDropdown.classList.toggle("show");
        });

        // Close dropdown menu when clicking anywhere else on the document
        window.addEventListener("click", () => {
            if (userDropdown.classList.contains("show")) {
                userDropdown.classList.remove("show");
            }
        });
    }

    // Handle logout link click
    const logoutLink = document.getElementById("logout-link");
    if (logoutLink) {
        logoutLink.addEventListener("click", (event) => {
            event.preventDefault();
            // Clear session data and redirect to login page
            sessionStorage.removeItem("isLoggedIn");
            sessionStorage.removeItem("userData");
            window.location.href = "/pages/login-page.html";
        });
    }

    // Display the current user's name in the dropdown header
    const userProfile = document.getElementById("dropdown-header");
    if (userProfile) {
        userProfile.innerHTML = `
        <p class="user-name">${user.username}</p>
    `;
    }

    // Display the current user's name in the main menu profile section
    const profileName = document.getElementById("main-menu-username");
    if (profileName) {
        profileName.innerHTML = `
            <p class="main-menu-username">${user.username}</p>
        `;
    }

    // Initialize the ticket creation form/modal listeners
    initTicketForm();

});
