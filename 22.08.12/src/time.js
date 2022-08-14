const clock = document.querySelector("#clock");
const today = document.querySelector("#today");
const date = new Date();

// 실시간 시계 나타내기
function realTimeClock() {
  const hr = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hr}:${min}:${sec}`;
  console.log(`clock wokring`);
}

// 년.월.일 요일 가져오기
function todayDate() {
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
