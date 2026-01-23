import { newTaskForm } from "./forms.js";

export function loadTaskPage(project) {
    const display = document.querySelector(".display");
    display.id = "taskPage";
    display.innerHTML = "";

    const header = document.createElement("div");
    header.className = "taskHeader";

    const title = document.createElement("h1");
    title.className = "taskTitle";
    title.textContent = project.name;

    const newTaskBtn = document.createElement("button");
    newTaskBtn.className = "newTaskBtn";
    newTaskBtn.textContent = "+";

    newTaskBtn.addEventListener("click", () => {
        newTaskForm();
    })

    header.appendChild(title);
    header.appendChild(newTaskBtn);

    const taskHolder = document.createElement("div");
    taskHolder.className = "taskHolder";

    for (const task of project.todoArray) {
        const taskDiv = document.createElement("div");
        const taskName = document.createElement("p");

        taskDiv.className = "task";
        taskName.className = "taskName";

        taskName.textContent = task.title;

        taskDiv.appendChild(taskName);
        taskHolder.appendChild(taskDiv);
    }

    display.appendChild(header)
    display.appendChild(taskHolder);
}