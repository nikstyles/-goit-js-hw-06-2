const inputEl = document.querySelector("#validation-input");

function validationInput() {
  if (inputEl.value.trim().length !== Number(inputEl.dataset.length)) {
    inputEl.classList = "invalid";
  } else {
    inputEl.classList = "valid";
  }
}

const checkInputLength = inputEl.addEventListener("blur", validationInput);
