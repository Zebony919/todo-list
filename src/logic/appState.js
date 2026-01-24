import { Todo, Project, ProjectStorage } from "./classes.js";

export const defaultProjectStorage = new ProjectStorage();

const myProject = new Project("Default");
defaultProjectStorage.addProject(myProject);

const task1 = new Todo("Buy milk", "From store", "2024-01-23", "high");
const task2 = new Todo("Walk the dog", "In the park", "2025-13-09", "medium");

myProject.addTodo(task1);
myProject.addTodo(task2);