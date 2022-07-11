const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesWrap: document.querySelector("#boxes"),
};

refs.input.addEventListener("input", getNumber);
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(inputEl.value);

let number = 0;

function getNumber(event) {
  number = Number(event.currentTarget.value);
  if (number < 1 || number > 100 || number % 1 !== 0) {
    alert("Введіть ціле число від 1 до 100");
    event.currentTarget.value = "";
    return;
  }
  console.log(number);
  return number;
}

function createBoxesMarkup(arr) {
  const resultArray = arr.map((element, index) => {
    const increaseSize = 30 + index * 10;
    const color = getRandomHexColor();

    return `<div style="width: ${increaseSize}px; height: ${increaseSize}px; background-color: ${color}"></div>`;
  });

  return resultArray;
}

function createBoxes(event) {
  const newArr = [];
  newArr.length = number;
  newArr.fill(number);

  const resultMarkupStr = createBoxesMarkup(newArr).join("");

  refs.boxesWrap.insertAdjacentHTML("afterbegin", resultMarkupStr);

  refs.input.value = "";
  number = 0;
}

function destroyBoxes(event) {
  refs.boxesWrap.innerHTML = "";
}
