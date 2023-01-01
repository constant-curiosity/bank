

const $ = (id) => {
  "use strict";
  return document.getElementById(id);
};

const validateLogin = () => {
  "Use Strict";
  const email = $("login_Email").value,
    password1 = $("login_Pwd").value,
    includesNumber = /[0-9]/.test(password1),
    includesLowerCase = /[a-z]/.test(password1),
    includesUpperCase = /[A-Z]/.test(password1),
    includesSpecialCharacters =
      /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/.test(password1),
    emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValidPassW;
  let isValidEmail;

  if (
    includesNumber &&
    includesLowerCase &&
    includesUpperCase &&
    includesSpecialCharacters &&
    password1.length > 9
  ) {
    isValidPassW = true;
    $("invalid_Pwd").innerHTML = "";
  } else {
    isValidPassW = false;
    $("invalid_Pwd").innerHTML = "Please enter a valid password.";
  }

  if (emailRegEx.test(email)) {
    isValidEmail = true;
    $("invalid_Email").innerHTML = "";
  } else {
    isValidEmail = false;
    $("invalid_Email").innerHTML = "Please enter a valid email.";
  }

  if (isValidEmail && isValidPassW) {
    $("login_Btn").setAttribute("type", "submit");
  }
};

const hamburgerMenu = () => {
  const dropDownNav = $("dropDownNav");
  if (dropDownNav.style.display === "block") {
    dropDownNav.style.display = "none";
  } else {
    dropDownNav.style.display = "block";
  }
};

window.onload = () => {
  $("login_Btn").onclick = validateLogin;
  $("login_Email").focus();
};
