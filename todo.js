document.getElementById("add-button").addEventListener("click", addTask);

function addTask() {
  const todoInput = document.getElementById("todo-input");
  const taskText = todoInput.value.trim();
  
  if (taskText !== "") {
    const todoList = document.getElementById("todo-list");

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    todoInput.value = "";
  }
}
