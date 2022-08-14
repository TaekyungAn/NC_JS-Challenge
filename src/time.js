const clock = document.querySelector("h1#clock");
// const today = document.querySelector("#today");

// 실시간 시계 나타내기
function realTimeClock() {
  const date = new Date(); // setInterval이 실행 될 때마다 계속 불러와야 함
  const hr = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hr}:${min}:${sec}`;
}

// 년.월.일 요일 가져오기
function todayDate() {
  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const yr = String(date.getFullYear());
  const mon = String(date.getMonth() + 1).padStart(2, "0");
  const dt = String(date.getDate()).padStart(2, "0");
  const dayofWeek = week[date.getDay()];
  today.innerHTML = `${yr}.${mon}.${dt} ${dayofWeek}`;
}

todayDate();
realTimeClock();
setInterval(realTimeClock, 1000);
