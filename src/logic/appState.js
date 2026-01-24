import { Todo, Project, ProjectStorage } from "./classes.js";
import { loadState } from "./persistence.js";

export let defaultProjectStorage;

const loadedStorage = loadState();

if (loadedStorage) {
    defaultProjectStorage = loadedStorage;
} else {
    defaultProjectStorage = new ProjectStorage();

    const myProject = new Project("Default");
    defaultProjectStorage.addProject(myProject);
    defaultProjectStorage.changeCurrentProject(myProject);

    const task1 = new Todo("Buy milk", "From store", "2024-01-23", "high");
    myProject.addTodo(task1);
}