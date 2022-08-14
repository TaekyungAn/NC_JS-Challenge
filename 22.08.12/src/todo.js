const todo_form = document.getElementById("todo_form");
const todo_input = todo_form.querySelector("input");
const todo_list = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  // JSON.stringify로 localStorage에 배열형태로 저장한다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 다시 한번 저장해주어야 한다!
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todo_list.appendChild(li);
}

function handleTodoSubmit(e) {
  // submit때문에 자동으로 작동하는 새로고침 방지
  e.preventDefault();
  //input.value를 지우기 전에 값 저장
  const newTodo = todo_input.value;
  // 엔터 누르면 input에 작성한 값 초기화
  todo_input.value = "";
  // 객체형태로 담아 id를 부여한다.
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  // 작성한 todo들을 localStorage에 저장하기 위해서 배열에 넣어 줌
  toDos.push(newTodoObj);
  // 저장한 newTodo값을 새로운 function을 통해 표현해 줌
  paintTodo(newTodoObj);
  saveTodos();
}
todo_form.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const pasredTodos = JSON.parse(savedTodos);
  pasredTodos.forEach(paintTodo);
}
