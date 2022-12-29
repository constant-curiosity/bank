



const $ = (id) => {
  "Use Strict";
  return document.getElementById(id);
};

const verifyEmail = () => {
  const email = $("email_Reset").value,
    emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegEx.test(email)) {
    $("email_Reset_Error").innerHTML = "";
    comparesPwd();
  } else {
    $("email_Reset_Error").innerHTML = "Please enter a valid email address.";
  }
};

const comparesPwd = () => {
  const pwd1 = $("pwd1_Reset").value,
    pwd2 = $("pwd2_Reset").value,
    includesNumber = /[0-9]/.test(pwd1),
    includesLowerCase = /[a-z]/.test(pwd1),
    includesUpperCase = /[A-Z]/.test(pwd1),
    includesSpecialCharacters =
      /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/.test(pwd1);

  if (
    includesNumber &&
    includesLowerCase &&
    includesUpperCase &&
    includesSpecialCharacters &&
    pwd1.length > 9 &&
    pwd1 === pwd1
  ) {
    $("update_btn").setAttribute("type", "submit");
  } else if (pwd1 === "" && pwd2 === "") {
    $("pwd1_Reset_Error").innerHTML = "Please Enter a password.";
    $("pwd2_Reset_Error").innerHTML = "Please Enter a password.";
  } else {
    $("pwd1_Reset_Error").innerHTML = "Passwords do not match.";
    $("pwd2_Reset_Error").innerHTML = "Passwords do not match.";
  }
};

window.onload = () => {
  "Use Strict";
  $("update_btn").onclick = verifyEmail;
  $("email_Reset").focus();
};
