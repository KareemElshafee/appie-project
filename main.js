"use strict";
const overlay = document.querySelector(".overlay");
const burgerMenu = document.querySelector(".mobile-menu");
const navBav = document.querySelector("nav");
const closeNavBar = document.querySelector(".close-nav");
const logInBtn = document.querySelector(".btn.log-in");
const logInForm = document.querySelector(".log-in-form");
const submitLogInForm = document.querySelector('input[type="submit"]');
const closeLogInForm = document.querySelector(".close-login-form");
const formInputField = document.querySelectorAll(".input-field input");
const checkBox = document.querySelector(".switch input");
const switchBox = document.querySelector(".switch-box");
const slider = document.querySelector(".slider");
const planPeriod = document.querySelectorAll(".period");
const price = document.querySelectorAll(".plan .price strong");

function showOverlayAndForm() {
  logInForm.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideOverlayAndForm() {
  logInForm.classList.add("hidden");
  overlay.classList.add("hidden");
}

burgerMenu.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  navBav.style.display = "block";
});

overlay.addEventListener("click", function () {
  navBav.style.display = "none";
  hideOverlayAndForm();
});

closeNavBar.addEventListener("click", function () {
  overlay.classList.add("hidden");
  navBav.style.display = "none";
});

logInBtn.addEventListener("click", function () {
  showOverlayAndForm();
});

submitLogInForm.addEventListener("click", function (e) {
  e.preventDefault();
  hideOverlayAndForm();
  Array.from(formInputField).forEach((input) => {
    input.value = "";
  });
});

closeLogInForm.addEventListener("click", function () {
  hideOverlayAndForm();
});

slider.addEventListener("click", function () {
  if (!checkBox.checked) {
    planPeriod.forEach((period) => {
      period.textContent = "/year";
    });
    price.forEach((price) => {
      price.textContent = +price.textContent + 118;
    });
  } else {
    price.forEach((price) => {
      price.textContent = +price.textContent - 118;
      planPeriod.forEach((period) => {
        period.textContent = "/month";
      });
    });
  }
});
