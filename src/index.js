import "./style.css";
import { Todo } from "./todoObj.js";
import { Project } from "./projectObj.js";
import { ProjectStorage } from "./projectStorage.js";

const projectStorage = new ProjectStorage();
const myProject = new Project("Chores");

projectStorage.addProject(myProject);

projectStorage.printProjects();

const task1 = new Todo("Buy milk", "From store", "2024-01-23", "high");
const task2 = new Todo("Walk the dog", "In the park", "today", "medium");

console.log(task1.complete)

task1.changeCompleteStatus();

console.log(task1.complete);