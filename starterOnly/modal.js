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

// DOM Form fields
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

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

// Issue #2 implement form entries & validation

// Form fields : Checked functions///

// 1) FIRSTNAME
function isFirstNameChecked() {
  if (first.value.trim() === "" || first.value.trim().length < 2) {
    first.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    first.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}
// 2) LASTNAME
function isLastNameChecked() {
  if (last.value.trim() === "" || last.value.trim().length < 2) {
    last.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    last.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// 3) MAIL
function isEmailChecked() {
  const regexOk =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim().match(regexOk)) {
    email.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    email.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// 4) BIRTHDATE
function isBirthdateChecked() {
  if (birthdate.value.trim() === "" || birthdate.value.trim().length !== 10) {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// 5) QUANTITY
function isQuantityChecked() {
  if (quantity.value.trim() === "" || isNaN(quantity.value.trim()) === true) {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// 6) CITY
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

function isCheckbox1Checked() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    checkbox1.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// FORM FIELDS VALUES

// 1) FIRSTNAME
first.addEventListener("input", (e) => {
  let first = e.target.value;
  console.log(first);
  isFirstNameChecked();
});

// 2) LASTNAME
last.addEventListener("input", (e) => {
  let last = e.target.value;
  console.log(last);
  isLastNameChecked();
});

// 3) MAIL
email.addEventListener("input", (e) => {
  let email = e.target.value;
  console.log(email);
  isEmailChecked();
});

// 4) BIRTHDATE
birthdate.addEventListener("input", (e) => {
  let birthdate = e.target.value;
  console.log(birthdate);
  isBirthdateChecked();
});

// 5) QUANTITY
quantity.addEventListener("input", (e) => {
  let quantity = e.target.value;
  console.log(quantity);
  isQuantityChecked();
});

// 6) CITY
locations.addEventListener("input", (e) => {
  let city = e.target.value;
  console.log(city);
  isCityChecked();
});

// 7) TERMS & CONDITIONS
checkbox1.addEventListener("input", (e) => {
  let checkbox1 = e.target.checked;
  console.log(checkbox1);
  isCheckbox1Checked();
});

// 8) NEWSLETTER
checkbox2.addEventListener("input", (e) => {
  let checkbox2 = e.target.checked;
  console.log(checkbox2);
});

//Event Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function allFieldschecked() {
  isFirstNameChecked();
  isLastNameChecked();
  isEmailChecked();
  isBirthdateChecked;
  isQuantityChecked;
  isCheckbox1Checked;
  isCityChecked;
}

// function validate() {
//   if (
//     isFirstNameChecked() === true &&
//     isLastNameChecked() === true &&
//     isEmailChecked() === true &&
//     isBirthdateChecked() === true &&
//     isQuantityChecked() === true &&
//     isCheckbox1Checked() === true &&
//     isCityChecked() === true
//   ) {
//     return true;
//   } else {
    
//     return false
//   }
// }
