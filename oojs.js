class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }

    render() {
        const li = document.createElement("li");
        li.textContent = this.name;
        li.style.textDecoration = this.completed ? "line-through" : "none";

        li.addEventListener("click", () => {
            this.toggleComplete();
            li.style.textDecoration = this.completed ? "line-through" : "none";
        });

        return li;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
        this.taskList = document.getElementById("taskList");
        this.init();
    }

    init() {
        document.getElementById("addTask").addEventListener("click", () => this.addTask());
    }

    addTask() {
        const input = document.getElementById("taskInput");
        const taskName = input.value.trim();

        if (taskName) {
            const task = new Task(taskName);
            this.tasks.push(task);
            this.taskList.appendChild(task.render());
            input.value = "";
        }
    }
}

// Alkalmazás indítása
document.addEventListener("DOMContentLoaded", () => {
    new TaskManager();
});
