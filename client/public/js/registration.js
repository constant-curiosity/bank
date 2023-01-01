

const $ = (id) => {
  "Use Strict";
  return document.getElementById(id);
};

const validateRegistration = () => {
  "Use Strict";
  const email = $("register_Email").value,
    password1 = $("register_Password").value,
    password2 = $("register_Confirm_Password").value,
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
    password1.length > 9 &&
    password1 === password2
  ) {
    isValidPassW = true;
    $("passWord_error1").innerHTML = "";
    $("passWord_error2").innerHTML = "";
  } else {
    isValidPassW = false;
    $("passWord_error1").innerHTML = "Please enter a valid matching password.";
    $("passWord_error2").innerHTML = "Please enter a valid matching password.";
  }

  if (emailRegEx.test(email)) {
    isValidEmail = true;
    $("register_Email_Error").innerHTML = "";
  } else {
    isValidEmail = false;
    $("register_Email_Error").innerHTML = "Please enter a valid email.";
  }

  if (isValidEmail && isValidPassW) {
    $("submit_Registration").setAttribute("type", "submit");
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
  "Use Strict";
  $("submit_Registration").onclick = validateRegistration;
  $("register_Email").focus();
};
