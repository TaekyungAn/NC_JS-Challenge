const images = ["mist1.jpeg", "mist2.jpeg", "rain1.jpeg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;
bgImg.classList.add("background");
document.body.appendChild(bgImg);
