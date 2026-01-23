export class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = false;
    }

    editTitle(title) {
        this.title = title;
    }

    editDescription(description) {
        this.description = description;
    }

    editDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    editPriority(priority) {
        this.priority = priority;
    }

    changeCompleteStatus() {
        this.complete = (!this.complete);
    }
}


export class Project {
    constructor(name) {
        this.name = name;
        this.todoArray = [];
    }

    addTodo(task) {
        this.todoArray.push(task);
    }

    deleteTodo(task) {
        const elementIndex = this.todoArray.findIndex(todo => todo === task);
        if (elementIndex > -1) {
            this.todoArray.splice(elementIndex, 1);
        }
    }

    printTasks() {
        console.log(this.name);

        for (let i = 0; i < this.todoArray.length; i++) {
            console.log(`${i + 1}. ${this.todoArray[i].title}`)
        }
    }

    editTitle(name) {
        this.name = name;
    }
}


export class ProjectStorage {
    constructor() {
        this.projects = [];
        this.currentProject = null;
    }

    addProject(project) {
        this.projects.push(project);
    }

    deleteProject(project) {
        const projectIndex = this.projects.findIndex(target => target === project);
        if (projectIndex > -1) {
            this.projects.splice(projectIndex, 1);
        }
    }

    changeCurrentProject(project) {
        this.currentProject = project;
    }

    printProjects() {
        for (let i = 0; i < this.projects.length; i++) {
            console.log(`${this.projects[i].name}`)
        }
    }
}