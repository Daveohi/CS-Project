// Initialize an array to store tasks
/*let tasks = [];

// Function to add a task
function addTask() {
  const titleInput = document.getElementById("titleInput");
  const descriptionInput = document.getElementById("descriptionInput");

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title === "" || description === "") {
    alert("Please provide both a title and description for the task.");
    return;
  }

  // Create a task object
  const task = {
    title,
    description,
  };

  // Add the task to the array
  tasks.push(task);

  // Call a function to update the task list display
  updateTaskList();

  // Clear the input fields
  titleInput.value = "";
  descriptionInput.value = "";
}

// Function to clear the task list
function clearStorage() {
  tasks = [];
  updateTaskList();
}

// Function to search for tasks
function searchTasks() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const filteredTasks = tasks.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchInput) ||
      task.description.toLowerCase().includes(searchInput)
    );
  });

  updateTaskList(filteredTasks);
}

// Function to update the task list display
function updateTaskList(taskArray = []) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  taskArray.forEach((task, index) => {
    const newRow = taskList.insertRow();
    newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleteTask(${index})">Delete</button></td>
        `;
  });
}*/

/*This JavaScript code defines functions for adding tasks, clearing the list, searching tasks, and updating the task list display. It uses an array called tasks to store the task objects and dynamically updates the table in the HTML based on the tasks in the array.*/







//Declaring variables
const titleInput = document.getElementById("titleInput");
const descriptionInput = document.getElementById("descriptionInput");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clear");
const searchInput = document.getElementById("searchInput");

// Function to add a task
//The addTask function adds a new task to the table by creating a new row and inserting it into the taskList table.
function addTask() {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (title === "" || description === "") {
    alert("Please provide a title and description for the task.");
    return;
  }

  const newRow = taskList.insertRow(-1);
  const sNo = taskList.rows.length - 1;

  newRow.innerHTML = `
            <th scope="row">${sNo}</th>
            <td>${title}</td>
            <td>${description}</td>
            <td><input type="checkbox"</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleteTask(this)">Delete</button></td>
        `;

  titleInput.value = "";
  descriptionInput.value = "";
}

// Function to delete a task
//The deleteTask function removes a task when the "Delete" button is clicked by finding the row and deleting it.
function deleteTask(button) {
  const row = button.parentNode.parentNode;
  const rowIndex = row.rowIndex;
  taskList.deleteRow(rowIndex);
}

// Function to clear the task list
//The clearStorage function clears the entire task list by overwriting the inner HTML of the taskList element.

function clearStorage() {
  taskList.innerHTML =
    '<tr><th scope="row">S.No.</th><td></td><td></td><td><input type="checkbox"</td><td><button class="btn btn-sm btn-primary">Delete</button></td></tr>';
}

// Function to search tasks
//The searchTasks function filters tasks based on the search input, showing or hiding rows that match or don't match the search text.
function searchTasks() {
  const searchText = searchInput.value.toLowerCase();
  const rows = taskList.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const title = row.getElementsByTagName("td")[0].textContent.toLowerCase();
    const description = row
      .getElementsByTagName("td")[1]
      .textContent.toLowerCase();

    if (title.includes(searchText) || description.includes(searchText)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}
