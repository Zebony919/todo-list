import { Todo, Project, ProjectStorage } from "./classes.js";

export const defaultProjectStorage = new ProjectStorage();

const myProject = new Project("Default");
defaultProjectStorage.addProject(myProject);

const myProject2 = new Project("Default2");
defaultProjectStorage.addProject(myProject2);

const myProject3 = new Project("Default3");
defaultProjectStorage.addProject(myProject3);

const task1 = new Todo("Buy milk", "From store", "2024-01-23", "high");
const task2 = new Todo("Walk the dog", "In the park", "today", "medium");

myProject.addTodo(task1);
myProject.addTodo(task2);