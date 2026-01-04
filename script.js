document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task) {
            addTask(task);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const task = todoInput.value.trim();
            if (task) {
                addTask(task);
                todoInput.value = '';
            }
        }
    });

    function addTask(task) {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = task;
        taskSpan.classList.add('task');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => {
            const newTask = prompt('Edit your task:', taskSpan.textContent);
            if (newTask) {
                taskSpan.textContent = newTask;
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
