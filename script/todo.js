const todoForm = document.querySelector(".todoForm");

let todos = [];
const savedTodo = JSON.parse(localStorage.getItem("todos"));

if (savedTodo !== null) {
  todos = savedTodo;
  todos.forEach((v) => makeTodoList(v));

}

todoForm.addEventListener("submit", submitTodo);

////////////////////////////////////////////////////////////////////

function submitTodo(event) {
  event.preventDefault();

  const whatTodo = {
    id: Date.now(),
    value: todoForm.querySelector("input").value,
  
  };

  todos.push(whatTodo);

  saveTodo();
  todoForm.querySelector("input").value = "";

  makeTodoList(whatTodo);
}

////////////////////////////////////////////////////////////////////

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

////////////////////////////////////////////////////////////////////

function makeTodoList(v) {
  const todoList = document.createElement("ul");
  todoList.id = v.id;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "checkBox";
 
  checkBox.addEventListener("change", makeLineTodo);

  const listItem = document.createElement("ul");
  listItem.innerText = v.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✗";
  deleteBtn.addEventListener("click", deleteTodo);

  todoList.appendChild(checkBox);

  todoList.appendChild(listItem);
  todoList.appendChild(deleteBtn);

  document.querySelector("ul").appendChild(todoList);
}

////////////////////////////////////////////////////////////////////

function deleteTodo(event) {
  const removeThing = event.target.parentElement;

  todos = todos.filter((v) => v.id !== parseInt(removeThing.id));

  saveTodo();

  removeThing.remove();
}

/////////////////////////////////////////////////////////

function makeLineTodo(event) {
  
  const targetParent = event.target.parentElement; //todoList



  targetParent.querySelector("ul").classList.toggle("makeLine");
  
}
