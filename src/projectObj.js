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