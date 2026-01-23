export function loadTaskPage(project) {
    const display = document.querySelector(".display");
    display.id = "taskPage";
    display.innerHTML = "";

    const title = document.createElement("h1");
    title.className = "projectTitle";
    title.textContent = project.name;

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

    display.appendChild(title)
    display.appendChild(taskHolder);
}