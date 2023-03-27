const body = document.querySelector("body");
const colorButton = document.querySelector(".change-color");
colorButton = document.addEventListener("click", bodyColor);

function getRandomHexColor() {
  1;
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function bodyColor(event) {
  colorButton.event.currentTarget = body.style.backgroundColor =
    getRandomHexColor();
}
