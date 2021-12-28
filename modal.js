// Responsive NAVBAR
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const confirmation = document.querySelector(".successfull-container");
const btnSuccess = document.getElementById("btn-confirmation");
const closeSuccess = document.getElementById("close-success");

// DOM Form fields
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// Format fields
const regexFirstName = /^[a-z ,.'-]+$/i;
const regexMail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexNum = /^[1-9]{0,1}[0-9]$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Issue #1 - close modal event
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// Issue #2 & #3 - FORM VALIDATION
// 1) FUNCTIONS FOR EACH FIELD
//firstname
function isFirstNameChecked() {
  if (
    first.value.trim() === "" ||
    first.value.trim().length < 2 ||
    !first.value.trim().match(regexFirstName)
  ) {
    first.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    first.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}
//lastname
function isLastNameChecked() {
  if (
    last.value.trim() === "" ||
    last.value.trim().length < 2 ||
    !last.value.trim().match(regexFirstName)
  ) {
    last.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    last.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}
//email
function isEmailChecked() {
  if (email.value.trim().match(regexMail)) {
    email.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    email.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

//birthdate
function isBirthdateChecked() {
  if (birthdate.value.trim() === "" || birthdate.value.trim().length !== 10) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}
//quantity
function isQuantityChecked() {
  if (
    quantity.value.trim() === "" ||
    isNaN(quantity.value.trim()) === true ||
    quantity.value.trim().length > 2 
  ) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}
//city
function isCityChecked() {
  if (
    city[0].checked === false &&
    city[1].checked === false &&
    city[2].checked === false &&
    city[3].checked === false &&
    city[4].checked === false &&
    city[5].checked === false
  ) {
    locations.setAttribute("data-error-visible", "true");
    return false;
  } else {
    locations.setAttribute("data-error-visible", "false");
    return true;
  }
}
//terms & conditions
function isCheckbox1Checked() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    checkbox1.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// 2) FORM FIELDS EVENT & VALUES GENERATION

//firstname
first.addEventListener("focusout", (e) => {
  isFirstNameChecked();
  let firstValue = e.target.value;
  console.log(firstValue);
});

//lastname
last.addEventListener("focusout", (e) => {
  isLastNameChecked();
  let lastValue = e.target.value;
  console.log(lastValue);
});

//email
email.addEventListener("focusout", (e) => {
  isEmailChecked();
  let emailValue = e.target.value;
  console.log(emailValue);
});

//birthdate
birthdate.addEventListener("focusout", (e) => {
  isBirthdateChecked();
  let birthdateValue = e.target.value;
  console.log(birthdateValue);
});

//quantity
quantity.addEventListener("focusout", (e) => {
  isQuantityChecked();
  let quantityValue = e.target.value;
  console.log(quantityValue);
});

//city
locations.addEventListener("input", (e) => {
  isCityChecked();
  let cityValue = e.target.value;
  console.log(cityValue);
});

//terms & conditions
checkbox1.addEventListener("input", (e) => {
  isCheckbox1Checked();
  let checkbox1Value = e.target.checked;
  console.log(checkbox1Value);
});

//newsletter
checkbox2.addEventListener("input", (e) => {
  let checkbox2Value = e.target.checked;
  console.log(checkbox2Value);
});

// 3) ALL FIELDS CHECKED FUNCTION

function allFieldsChecked() {
  return (
    isFirstNameChecked() &&
    isLastNameChecked() &&
    isEmailChecked() &&
    isBirthdateChecked() &&
    isQuantityChecked() &&
    isCityChecked() &&
    isCheckbox1Checked()
  );
}

function formComplete() {
  form.reset();
  modalbg.style.display = "none";
  confirmation.style.display = "block";
}

//EVENT SUBMIT
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("check submit");
  if (allFieldsChecked()) {
    formComplete();
  }
});

// CLOSE SUCCESSFULL MODAL
closeSuccess.addEventListener("click", () => {
  confirmation.style.display = "none";
});

btnSuccess.addEventListener("click", () => {
  confirmation.style.display = "none";
});
