const formEl = document.querySelector(".login-form");

function checkFormOccupancy(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }

  const loginInfo = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(loginInfo);
  event.currentTarget.reset();
}

const checkForm = formEl.addEventListener("submit", checkFormOccupancy);
