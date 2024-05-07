
let inptask = document.getElementById("inptask");
let listTasks = document.getElementById("listTasks");





function addItemToList(taskName) {
    let newTaskListItem = document.createElement("li");
    newTaskListItem.innerText = taskName;
    listTasks.appendChild(newTaskListItem);
}

function getNewTaskName() {
    return inptask.value;
}

    let btnAdd = document.getElementById("btnAdd");
    btnAdd.onclick = function () {
        let newTaskName = getNewTaskName();
        addItemToList(newTaskName);
        inptask.value = "";

    }