import { defaultProjectStorage } from "../logic/appState.js";

export function loadProjectPage() {
    const display = document.querySelector(".display");
    display.id = "projectPage";
    display.innerHTML = "";

    const title = document.createElement("h1");
    title.className = "projectTitle";
    title.textContent = "Projects";

    const projectHolder = document.createElement("div");
    projectHolder.className = "projectHolder";

    for (const project of defaultProjectStorage.projects) {
        const projectDiv = document.createElement("div");
        const projectName = document.createElement("p");
        const projectTaskAmount = document.createElement("p");
        const buttons = document.createElement("div");
        const openButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        projectDiv.className = "project";
        buttons.className = "buttons";
        openButton.className = "openBtn";
        openButton.id = "openBtn";
        deleteButton.className = "deleteBtn";
        deleteButton.id = "deleteBtn";

        projectName.textContent = project.name;
        projectTaskAmount.textContent = "Tasks: " + project.todoArray.length;
        openButton.textContent = "open";
        deleteButton.textContent = "delete";

        projectDiv.appendChild(projectName);
        projectDiv.appendChild(projectTaskAmount);
        buttons.appendChild(openButton);
        buttons.appendChild(deleteButton);
        projectDiv.appendChild(buttons);
        projectHolder.appendChild(projectDiv);
    }

    display.appendChild(title);
    display.appendChild(projectHolder)
}