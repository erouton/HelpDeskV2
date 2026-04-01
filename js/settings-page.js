document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const ticketsNotifToggle = document.getElementById("tickets-notif-toggle");
    const assignmentsNotifToggle = document.getElementById("assignments-notif-toggle");
    const systemNotifToggle = document.getElementById("system-notif-toggle");
    const firstNameInput = document.getElementById("firstname-input");
    const lastNameInput = document.getElementById("lastname-input");
    const usernameInput = document.getElementById("username-input");
    const emailInput = document.getElementById("email-input");
    const saveBtn = document.getElementById("save-settings-btn");
    const saveStatus = document.getElementById("save-status");

    function loadSettings() {

        const darkMode = localStorage.getItem("darkMode") === "true";
        darkModeToggle.checked = darkMode;
        applyDarkMode(darkMode);

        ticketsNotifToggle.checked = localStorage.getItem("ticktsNotif") !== "false";
        assignmentsNotifToggle.checked = localStorage.getItem("assingmentsNotif") !== "false";
        systemNotifToggle.checked = localStorage.getItem("systemNotif") !== "false";

        const storedUser = localStorage.getItem("userData");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            usernameInput.value = user.username || "";
            emailInput.value = user.email || "";
            firstNameInput.value = user.firstname || "";
            lastNameInput.value = user.lastname || "";
        }
    }

    loadSettings();

    function applyDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }

    darkModeToggle.addEventListener("change", () => {
        applyDarkMode(darkModeToggle.checked);
    });

    saveBtn.addEventListener("click", () => {
        localStorage.setItem("darkMode", darkModeToggle.checked);

        localStorage.setItem("ticketsNotif", ticketsNotifToggle.checked);
        localStorage.setItem("assignmentsNotif", assignmentsNotifToggle.checked);
        localStorage.setItem("systemNotif", systemNotifToggle.checked);

        const storedUser = localStorage.getItem("userData");
        const user = storedUser ? JSON.parse(storedUser) : {};
        user.username = usernameInput.value.trim();
        user.email = emailInput.value.trim();
        user.firstname = firstNameInput.value.trim();
        user.lastname = lastNameInput.value.trim();
        localStorage.setItem("userData", JSON.stringify(user));

        saveStatus.textContent = "Settings Saved!";
        saveStatus.classList.add("visible");
        setTimeout(() => saveStatus.classList.remove("visible"), 3000);
    });
})