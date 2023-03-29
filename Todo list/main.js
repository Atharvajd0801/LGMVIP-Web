const p = document.getElementById('First');
const q = document.getElementById('First_task');
const r = document.getElementById('tasks');

//Adding new task to the task list
function AddingTask(event) {
    event.preventDefault();
    if (q.value === '') return;
    const task = CreateTask(q.value);
    r.appendChild(task);
    q.value = '';
}

//Creating new task list
function CreateTask(taskName) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
            <input type = "checkbox">
            <label>${taskName}</label>    
            <span class="delete">X</span>

      `;

    //Adding delete button 
    const DeleteButton = task.querySelector('.delete');
    DeleteButton.addEventListener('click', deleteTask);

    return task;
}

// Deleting task from the task list

function deleteTask(event) {
    event.target.parentElement.remove();
}

p.addEventListener('submit', AddingTask);