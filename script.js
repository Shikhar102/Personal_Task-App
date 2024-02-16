// User tasks added by the user
var userTasks = [];

document.addEventListener("DOMContentLoaded", function () {
    var userTaskList = document.getElementById("userTaskList");

    // Example tasks
    var exampleTasks = [
        { task: "Complete project proposal", priority: "high", date: "2024-03-01" },
        { task: "Prepare presentation slides", priority: "medium", date: "2024-03-05" },
        { task: "Review project specifications", priority: "low", date: "2024-03-10" },
    ];

    // Add example tasks to user activity
    exampleTasks.forEach(function (exampleTask) {
        addUserTask(exampleTask, userTaskList);
    });
});

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var priorityInput = document.getElementById("priorityInput");
    var dateInput = document.getElementById("dateInput");
    var userTaskList = document.getElementById("userTaskList");

    if (taskInput.value.trim() !== "") {
        var newTask = {
            task: taskInput.value,
            priority: priorityInput.value,
            date: dateInput.value,
        };

        addUserTask(newTask, userTaskList);

        taskInput.value = "";
        priorityInput.value = "low";
        dateInput.value = "";
    }
}

function addUserTask(task, userTaskList) {
    userTasks.push(task); // Add task to userTasks

    var li = document.createElement("li");
    li.setAttribute("draggable", true);
    var formattedDate = format(parseISO(task.date), 'MMMM dd, yyyy', { locale: enUS });
    li.innerHTML = `
        <span>${task.task}</span>
        <span class="priority ${task.priority}">${task.priority}</span>
        <span class="date">${formattedDate}</span>
        <button onclick="removeUserTask(this)">Remove</button>
    `;
    userTaskList.appendChild(li);
}

function removeUserTask(button) {
    var userTaskList = document.getElementById("userTaskList");
    var li = button.parentNode;

    // Remove task from userTasks and user task list
    userTasks = userTasks.filter(task => task.task !== li.firstChild.textContent);
    userTaskList.removeChild(li);
}

function toggleView() {
    var userEntries = document.getElementById("userEntries");
    var allTasks = document.getElementById("allTasks");

    if (userEntries.style.display === "none") {
        userEntries.style.display = "block";
        allTasks.style.display = "none";
    } else {
        userEntries.style.display = "none";
        allTasks.style.display = "block";
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}

