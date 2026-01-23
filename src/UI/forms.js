import { defaultProjectStorage } from "../logic/appState.js";
import { Project } from "../logic/classes.js";
import { loadProjectPage } from "./projectPage.js";

export function newProjectForm() {
    const modal = document.createElement("div");
    modal.className = "projectModal";

    const formContainer = document.createElement("div");
    formContainer.className = "projectFormContainer"

    const form = document.createElement("form");
    form.className = "projectForm";

    const formTitle = document.createElement("h2");
    formTitle.className = "formTitle";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Project Title";
    input.required = true;

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Create";

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";

    form.appendChild(formTitle);
    form.appendChild(input);
    form.appendChild(submitBtn);
    form.appendChild(cancelBtn);
    formContainer.appendChild(form);
    modal.appendChild(formContainer);

    document.body.appendChild(modal);

    cancelBtn.addEventListener("click", () => {
        modal.remove();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const projectName = input.value;

        const newProject = new Project(projectName);
        defaultProjectStorage.addProject(newProject);
        loadProjectPage();

        modal.remove();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

export function newTaskForm() {
    
}