const clock = document.querySelector("#clock");
const day = document.querySelector("#day");

function realTimeClock() {
  const date = new Date();
  const hr = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hr}:${min}:${sec}`;
}
realTimeClock();
setInterval(realTimeClock, 1000);
