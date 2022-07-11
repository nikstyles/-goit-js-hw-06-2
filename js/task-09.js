const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanColorEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.background = randomColor;
  spanColorEl.textContent = randomColor;
}

const handlerChangeColor = buttonEl.addEventListener("click", changeColor);
