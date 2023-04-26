# To-do list

This is a JavaScript code for a simple to-do list application with the ability to add, edit, and delete tasks. It initializes an empty array called "tasks" and creates variables that store references to various HTML elements on the page.

The code adds event listeners to two buttons, "Add Task" and "Cancel," which control the visibility of the task form. When the "Add Task" button is clicked, the form becomes visible, and when the "Cancel" button is clicked, the form is hidden.

The code defines several functions for manipulating the "tasks" array, including "isTitleUnique" to check whether a task title is unique, "addTask" to add a new task to the array, "renderTasks" to display the current list of tasks, "removeTask" to remove a task from the array, and "editTask" to edit an existing task.

The code also defines event listeners for submitting the task form and for editing or deleting a task. When a task is submitted, the title, deadline, and status are extracted from the form and added to the "tasks" array. When a task is edited, the task's details are extracted from the array and pre-populated in the task form, and when the "Submit Task" button is clicked, the updated details are saved back to the "tasks" array.

The code renders the list of tasks using a loop that creates an HTML element for each task in the array. The HTML element includes the task's title, deadline, status, and buttons for editing and deleting the task.

Finally, the code adds event listeners to the "Edit" and "Remove" buttons for each task in the list.
