import { loadProjectPage } from "./projectPage.js";
import { newProjectForm } from "./forms.js";

document.addEventListener("DOMContentLoaded", () => {
    const newProjectBtn = document.querySelector(".newProject");
    newProjectBtn.addEventListener("click", () => {
        newProjectForm();
    })

    const projectBtn = document.querySelector(".projects");
    projectBtn.addEventListener("click", () => {
        loadProjectPage();
    });
});
