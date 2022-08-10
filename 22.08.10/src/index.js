const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const target = new Date("2022-12-24 00:00:00+0900");
  const today = new Date();
  const gap = target - today;
  const days = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, "0"); // 일
  const hours = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  ); // 시
  const minutes = String(Math.floor(((gap / 1000) * 60) % 60)).padStart(2, "0"); // 분
  const seconds = String(Math.floor((gap / 1000) % 60)).padStart(2, "0"); // 초
  clockTitle.innerHTML = `${days}days ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
