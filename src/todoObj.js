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