document.addEventListener("DOMContentLoaded", function () {
    const tasksForm = document.getElementById("tasks__form");
    const taskInput = document.getElementById("task__input");
    const tasksList = document.getElementById("tasks__list");

    function addTask(taskText) {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const titleDiv = document.createElement("div");
        titleDiv.className = "task__title";
        titleDiv.textContent = taskText;

        const removeLink = document.createElement("a");
        removeLink.href = "#";
        removeLink.className = "task__remove";
        removeLink.textContent = "×";

        removeLink.addEventListener("click", function (event) {
            event.preventDefault();
            tasksList.removeChild(taskDiv);
            removeTaskFromLocalStorage(taskText);
        });

        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(removeLink);
        tasksList.appendChild(taskDiv);
    }

    function saveTaskToLocalStorage(task) {
        const tasks = getTasksFromLocalStorage();
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function removeTaskFromLocalStorage(task) {
        let tasks = getTasksFromLocalStorage();
        tasks = tasks.filter((t) => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function getTasksFromLocalStorage() {
        const tasks = localStorage.getItem("tasks");
        return tasks ? JSON.parse(tasks) : [];
    }

    function loadTasks() {
        const tasks = getTasksFromLocalStorage();
        tasks.forEach((task) => addTask(task));
    }

    tasksForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();

        if (taskText) {
            addTask(taskText);
            saveTaskToLocalStorage(taskText);
            taskInput.value = "";
            taskInput.focus();
        }
    });

    loadTasks();
});
