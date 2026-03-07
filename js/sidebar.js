/**
 * @file sidebar.js
 * @description Loads the sidebar component onto the page when the DOM content is fully loaded.
 */

import {loadComponent} from "./utils.js";


document.addEventListener("DOMContentLoaded", async () => {
    // Inject the sidebar HTML template into the element with id 'sidebar'
    await loadComponent("#sidebar", "/components/sidebar.html");
});