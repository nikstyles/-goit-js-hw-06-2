const inputFontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
// console.log(inputFontSizeEl.value);

function changeFontSize(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}

textEl.style.fontSize = inputFontSizeEl.value + "px";
inputFontSizeEl.addEventListener("input", changeFontSize);
