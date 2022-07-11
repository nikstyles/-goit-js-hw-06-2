let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");

decrementButton.addEventListener("click", decrementNumber);
incrementButton.addEventListener("click", incrementNumber);

function decrementNumber() {
  counterValue -= 1;
  span.textContent = counterValue;
}

function incrementNumber() {
  counterValue += 1;
  span.textContent = counterValue;
}
