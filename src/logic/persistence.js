import { Todo, Project, ProjectStorage } from "./classes.js";
const STORAGE_KEY = "todo-app-state";

/* ---------- SAVE ---------- */
export function saveState(projectStorage) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(projectStorage)
    );
}

/* ---------- LOAD ---------- */
export function loadState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const data = JSON.parse(raw);

    const storage = new ProjectStorage();
    storage.currentProject = data.currentProject;

    for (const projectData of data.projects) {
        const project = new Project(projectData.name);

        for (const todoData of projectData.todoArray) {
            const todo = new Todo(
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority
            );
            project.addTodo(todo);
        }

        storage.addProject(project);
    }

    return storage;
}