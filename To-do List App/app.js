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
