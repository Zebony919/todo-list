console.log("Button page loaded")

import { loadProjectPage } from "./projectPage.js";

document.addEventListener("DOMContentLoaded", () => {
    const projectBtn = document.querySelector(".projects");
    console.log(projectBtn)

    projectBtn.addEventListener("click", () => {
        loadProjectPage();
    });
});
