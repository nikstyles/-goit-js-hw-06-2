const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// знайшов елемент в який буду додавати створені <li>
const ingredientsListEl = document.querySelector("#ingredients");

// функція для створення <li>, не зважаючи скільки
// прийде їх в масиві, стільки ж їх і з'явиться
const makeIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li"); // створення li
    liEl.textContent = ingredient; // додавання тексту
    return liEl;
  });
};

// виклик функції з передачою масиву ingredients
const elements = makeIngredients(ingredients);

// додавання всіх li до ul за один раз
ingredientsListEl.append(...elements);
