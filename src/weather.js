const API_KEY = `317973f84ec67f1014ac70af4988ecfb`;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const spanWeather = document.querySelector("#weather span:first-child");
      const spanTemp = document.querySelector("#weather span:last-child");
      const pCity = document.querySelector("#location");
      const weather = data.weather[0].main;
      const celsius = Math.round(data.main.temp);

      spanWeather.innerHTML = `${weather}`; // 아이콘으로 나타내다가, mouseover하면 숫자로
      spanTemp.innerHTML = `${celsius}°C`;
      pCity.innerHTML = data.name;
    })
  );
}
function onGeoError() {
  alert(`Can't find you.`);
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
