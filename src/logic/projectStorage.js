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