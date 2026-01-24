import { defaultProjectStorage } from "../logic/appState.js";
import { Todo, Project } from "../logic/classes.js";
import { loadProjectPage } from "./projectPage.js";
import { loadTaskPage } from "./taskPage.js";

export function newProjectForm() {
    const modal = document.createElement("div");
    modal.className = "projectModal";

    const formContainer = document.createElement("div");
    formContainer.className = "projectFormContainer"

    const form = document.createElement("form");
    form.className = "projectForm";

    const formTitle = document.createElement("h2");
    formTitle.className = "formTitle";
    form.textContent = "New Project";

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

export function newTaskForm(project) {
    const modal = document.createElement("div");
    modal.className = "taskModal";

    const formContainer = document.createElement("div");
    formContainer.className = "taskFormContainer"

    const form = document.createElement("form");
    form.className = "taskForm";

    const formTitle = document.createElement("h2");
    formTitle.className = "formTitle";
    form.textContent = "New Task";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Task Name";
    nameInput.required = true;

    const descriptionInput = document.createElement("input");
    descriptionInput.className = "taskDescription"
    descriptionInput.type = "text";
    descriptionInput.placeholder = "Description";
    descriptionInput.required = true;

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.required = true;

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Create";

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";

    formContainer.appendChild(formTitle);
    form.appendChild(nameInput);
    form.appendChild(descriptionInput);
    form.appendChild(dateInput);
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
        const taskName = nameInput.value;
        const description = descriptionInput.value;
        const date = dateInput.value;

        const newTask = new Todo(taskName, description, date, "low");
        project.addTodo(newTask);
        loadTaskPage(project);

        modal.remove();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}