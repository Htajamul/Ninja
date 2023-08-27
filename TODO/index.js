let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}

function markTaskAsComplete (taskId) {}

function deleteTask (taskId) {
    const newtasks = tasks.filter(function(task){
        return task.id!=taskId;
    })
    tasks = newtasks;
    renderList();
    showNotification("task deleted successfully");
    return;
}

function addTask (task) {
    if(task){
        tasks.push(task);
        renderList();
        showNotification("task added successfully");
        return;
    }
    showNotification("task cant not be added");
}

function showNotification(text) {
    alert(text)
}

function handlerinputkeypress(e){
    if(e.key=='Enter'){
        const text  = e.target.value;
        if(!text){
            showNotification("please enter text");
            return;
        }

        const task = {
            text, // OR text:text;
            id: Date.now().toString(),
            done:false,
        }
        e.target.value='';
        addTask(task)
    }
}

addTaskInput.addEventListener('keyup',handlerinputkeypress);
console.log('all oj ok ooo')