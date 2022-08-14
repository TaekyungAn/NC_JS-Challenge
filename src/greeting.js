const login_form = document.querySelector("#login_form");
const login_input = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

// 오타방지 : 중복단어 변수에 담아주기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  const username = login_input.value;
  event.preventDefault();
  login_form.classList.add(HIDDEN_CLASSNAME);

  // 로컬스토리지에 값 저장하기
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

// 전달받는 parameter에 따라 다른 함수로 빼주기
function paintGreetings(username) {
  greeting.innerHTML = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬스토리지에 저장된 값 가져오기
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  login_form.classList.remove(HIDDEN_CLASSNAME);
  login_form.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
