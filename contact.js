const fullNameEl = document.querySelector("#fullName");
const emailEl = document.querySelector("#email");
const subjectEl = document.querySelector("#subject");
const messageEl = document.querySelector("#message");
const submitBtn = document.querySelector(".submit__btn");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => handleValidation(e));

function handleValidation(e) {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isNameValid;
  let isEmailValid;
  let isSubjectValid;
  let isMessageValid;

  if (fullNameEl.value === "") {
    showErrors(fullNameEl, "Full name is required");
    isNameValid = false;
  } else {
    clearErrors(fullNameEl);
    isNameValid = true;
  }

  if (emailEl.value === "") {
    showErrors(emailEl, "Email is required");
    isEmailValid = false;
  } else if (!emailRegex.test(emailEl.value)) {
    showErrors(emailEl, "Invalid Email");
    isEmailValid = false;
  } else {
    clearErrors(emailEl);
    isEmailValid = true;
  }

  if (subjectEl.value === "") {
    showErrors(subjectEl, "Message subject is required");
    isSubjectValid = false;
  } else {
    clearErrors(subjectEl);
    isSubjectValid = true;
  }

  if (messageEl.value.length < 10) {
    showErrors(messageEl, "Message should have 10 or more characters");
    isMessageValid = true;
  } else {
    clearErrors(messageEl);
    isMessageValid = false;
  }

  console.log(isEmailValid);

  if (isEmailValid && isMessageValid && isNameValid && isSubjectValid) {
    const successEl = document.querySelector(".success__message");

    successEl.textContent = "Message successfully sent!";

    // e.target.submit() - TODO: To submit form, but this is just a mock functionality - Ridwan
    setTimeout(() => (successEl.textContent = ""), 10000);
  }
}

function showErrors(element, message, isValueValid) {
  element.nextElementSibling.textContent = message;
  element.setAttribute("aria-describedby", message);
  element.setAttribute("aria-invalid", !!message);
  console.log(element);
}

function clearErrors(element, isValueValid) {
  element.nextElementSibling.textContent = "";
}
