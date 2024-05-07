let InpTask = document.getElementById('InpTask');
let btnadd = document.getElementById('btnadd');
let ListTasks = document.getElementById('ListTasks');
let btnclear = document.getElementById('btnclear');

let tasks = []
    
    function saveTaskList() {
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    function retrieveList() {
        let retrievedTasks = localStorage.getItem("tasks");
            if(retrievedTasks) {
            tasks = JSON.parse(retrievedTasks);
        }
    }

    function renderTaskList() {
        ListTasks.innerHTML= "";
            for (let i=0;i< tasks.length; i++) {
            let li = document.createElement('li');
            li.innerText = tasks[i];
            ListTasks.appendChild(li);
            }
        }

    function addTask() {
        let task = InpTask.value;
            tasks.push(task);
            renderTaskList();
            saveTaskList();
        }

    function clearTaskList() {
        tasks = [];
        renderTaskList();
        saveTaskList();
    }
/*
btnclear.onclick = function() {
    clearTaskList();
}
*/
InpTask.addEventListener("keyup", function (event) {
    if(event.keyCode == 13) {
        addTask();
    }
});

InpTask.addEventListener("keyup", function (event) {
    if(event.keyCode == 46) {
        clearTaskList();
    }
});

/*
btnadd.onclick = function () {
    addTask();
}
*/
    retrieveList();
    renderTaskList();

    