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
        newTaskForm(project);
    })

    header.appendChild(title);
    header.appendChild(newTaskBtn);

    const taskHolder = document.createElement("div");
    taskHolder.className = "taskHolder";

    for (const task of project.todoArray) {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const taskName = document.createElement("p");
        taskName.className = "taskName";
        taskName.textContent = task.title;

        const dueDate = document.createElement("p");
        dueDate.className = "dueDate";
        dueDate.textContent = "Due: " + task.dueDate;

        const completeBtn = document.createElement("button");
        completeBtn.className = "completeBtn";
        completeBtn.textContent = "Complete";

        completeBtn.addEventListener("click", () => {
            project.deleteTodo(task);
            loadTaskPage(project);
        })

        taskDiv.appendChild(taskName);
        taskDiv.appendChild(dueDate);
        taskDiv.appendChild(completeBtn);
        taskHolder.appendChild(taskDiv);
    }

    display.appendChild(header)
    display.appendChild(taskHolder);
}