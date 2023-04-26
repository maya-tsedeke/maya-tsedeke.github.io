// Get DOM elements
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');
const taskFormContainer = document.getElementById('task-form-container');
const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDeadline = document.getElementById('task-deadline');
const taskStatus = document.getElementById('task-status');
const submitTaskBtn = document.getElementById('submit-task-btn');
const cancelTaskBtn = document.getElementById('cancel-task-btn');

// Define Default tasks in array
let tasks = [
    { title: 'Task 1', deadline: '2023-05-01', status: 'done' },
    { title: 'Task 2', deadline: '2023-05-02', status: 'not started' },
    { title: 'Task 3', deadline: '2023-05-03', status: 'in progress' },
];

// Function to render tasks in the task list
function renderTasks(index) {
    if (typeof index === 'number') {
        // Render only the task at the specified index
        const task = tasks[index];

        const taskItem = document.createElement('tr');
        taskItem.innerHTML = `
        <td>${task.title}</td>
        <td>${task.deadline}</td>
        <td>${task.status}</td>
        <td><button class="edit-task-btn" data-index="${index}" id="edit-task-btn">Edit</button></td>
        <td><button class="delete-task-btn" data-index="${index}" id="delete-task-btn">Delete</button></td>
      `;
        taskList.insertBefore(taskItem, taskList.childNodes[index]);

        // Add event listener to edit task button
        const editTaskBtn = taskItem.querySelector('.edit-task-btn');
        editTaskBtn.addEventListener('click', event => {
            const index = event.target.dataset.index;
            const task = tasks[index];
            taskTitle.value = task.title;
            taskDeadline.value = task.deadline;
            taskStatus.value = task.status;
            submitTaskBtn.dataset.index = index;
            taskFormContainer.style.display = 'block';
            addTaskBtn.disabled = true;
        });

        // Add event listener to delete task button
        const deleteTaskBtn = taskItem.querySelector('.delete-task-btn');
        deleteTaskBtn.addEventListener('click', event => {
            const index = event.target.dataset.index;
            tasks.splice(index, 1);
            taskList.removeChild(taskItem);
        });
    } else {
        // Render the entire task list
        taskList.innerHTML = '';

        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];

            const taskItem = document.createElement('tr');
            taskItem.innerHTML = `
          <td>${task.title}</td>
          <td>${task.deadline}</td>
          <td>${task.status}</td>
          <td><button class="edit-task-btn" data-index="${i}" id="edit-task-btn">Edit</button></td>
          <td><button class="delete-task-btn" data-index="${i}" id="delete-task-btn">Delete</button></td>
        `;
            taskList.appendChild(taskItem);

            // Add event listener to edit task button
            const editTaskBtn = taskItem.querySelector('.edit-task-btn');
            editTaskBtn.addEventListener('click', event => {
                const index = event.target.dataset.index;
                const task = tasks[index];
                taskTitle.value = task.title;
                taskDeadline.value = task.deadline;
                taskStatus.value = task.status;
                submitTaskBtn.dataset.index = index;
                taskFormContainer.style.display = 'block';
                addTaskBtn.disabled = true;
            });
            // Add event listener to delete task button
            const deleteTaskBtn = taskItem.querySelector('.delete-task-btn');
            deleteTaskBtn.addEventListener('click', event => {
                const index = event.target.dataset.index;
                tasks.splice(index, 1);
                renderTasks();
            });
        }
    }
}
// Function to add new task to task list
function addTask() {
    const title = taskTitle.value;
    const deadline = taskDeadline.value;
    const status = taskStatus.value;

    tasks.push({ title, deadline, status });
    renderTasks();
    taskTitle.value = '';
    taskDeadline.value = '';
    taskStatus.value = '';
    taskFormContainer.style.display = 'none';
    addTaskBtn.disabled = false;
}

// Function to edit existing task in task list
function editTask(index) {
    const title = taskTitle.value;
    const deadline = taskDeadline.value;
    const status = taskStatus.value;

    tasks[index] = { title, deadline, status };
    renderTasks();
    taskTitle.value = '';
    taskDeadline.value = '';
    taskStatus.value = '';
    submitTaskBtn.dataset.index = '';
    taskFormContainer.style.display = 'none';
    addTaskBtn.disabled = false;
}

// Event listener for add task button
addTaskBtn.addEventListener('click', event => {
    taskTitle.value = '';
    taskDeadline.value = '';
    taskStatus.value = '';
    submitTaskBtn.dataset.index = '';
    taskFormContainer.style.display = 'block';
    addTaskBtn.disabled = true;
});

// Event listener for submit task button
submitTaskBtn.addEventListener('click', event => {
    event.preventDefault();

    const title = taskTitle.value;
    const deadline = taskDeadline.value;
    const status = taskStatus.value;

    if (submitTaskBtn.dataset.index) {
        // Editing an existing task
        const index = submitTaskBtn.dataset.index;
        tasks[index].title = title;
        tasks[index].deadline = deadline;
        tasks[index].status = status;
        renderTasks();
    } else {
        // Adding a new task
        const newTask = { title, deadline, status };
        tasks.push(newTask);
        renderTasks(tasks.length - 1);
    }

    // Clear form and hide task form container
    taskTitle.value = '';
    taskDeadline.value = '';
    taskStatus.value = '';
    submitTaskBtn.dataset.index = '';
    taskFormContainer.style.display = 'none';
    addTaskBtn.disabled = false;
});

// Event listener for cancel task button
cancelTaskBtn.addEventListener('click', event => {
    event.preventDefault();
    taskTitle.value = '';
    taskDeadline.value = '';
    taskStatus.value = '';
    submitTaskBtn.dataset.index = '';
    taskFormContainer.style.display = 'none';
    addTaskBtn.disabled = false;
});

// Initial rendering of task list
renderTasks();
