document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    // Retrieve the text from the input and trim it
    let taskText = taskInput.value.trim();
    // Check if the input is not empty
    if (taskText === "") {
      alert("Please input some text!");
      return;
    }

    let newLi = document.createElement("li");
    newLi.textContent = taskText;

    let newBttn = document.createElement("button");
    newBttn.textContent = "Remove";
    newBttn.classList.add("remove-btn");

    newBttn.onclick = function () {
      newLi.remove();
    };
    newLi.appendChild(newBttn);
    taskList.appendChild(newLi);

    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
