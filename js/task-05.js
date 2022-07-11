const message = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");

// const textContent = message.value;
// console.log(textContent);

function textContent() {
  textSpan.textContent = message.value;

  if (message.value.trim() === "") {
    textSpan.textContent = "Anonymous";
  }
}

message.addEventListener("input", textContent);
