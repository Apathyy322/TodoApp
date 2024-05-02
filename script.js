var addTaskButton = document.getElementById('addTask');
var writeTodo = document.getElementById('todo');
var listContainer = document.querySelector('.list-container');

addTaskButton.addEventListener('click', function(){
    addTask();
});

writeTodo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
        event.preventDefault(); 
    }
});

function addTask() {
    var todoText = writeTodo.value.trim();
    if (todoText !== '') {
        var taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        var taskTextarea = document.createElement('textarea');
        taskTextarea.textContent = todoText;
        taskTextarea.setAttribute('rows', '1');
        taskTextarea.setAttribute('cols', '70');
        taskTextarea.classList.add('task-textarea');

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function() {
            taskContainer.remove();
        };

        taskContainer.appendChild(taskTextarea);
        taskContainer.appendChild(deleteButton);

        listContainer.appendChild(taskContainer);

      
        writeTodo.value = '';
        writeTodo.focus();
    }
}
