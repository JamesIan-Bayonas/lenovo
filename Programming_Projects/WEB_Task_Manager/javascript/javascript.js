function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    if (taskInput.value.trim() === "") return;
    
    let taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `<span>${taskInput.value}</span> <button onclick="removeTask(this)">Delete</button>`;
    
    taskList.appendChild(taskDiv);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}