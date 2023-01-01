

const $ = (id) => {
  "use strict";
  return document.getElementById(id);
};

const resetForm = () => {
  "use strict";
  $("finance_app").reset();
  $("missing_First_Name").innerHTML = "";
  $("missing_Last_Name").innerHTML = "";
  $("email_Missing").innerHTML = "";
  $("email_Confirm_Missing").innerHTML = "";
  $("email_Match").innerHTML = "";
  $("emailConfrm_Match").innerHTML = "";
  $("missing_City").innerHTML = "";
  $("missing_State").innerHTML = "";
  $("missing_Zip_Code").innerHTML = "";
  $("missing_Gross_Income").innerHTML = "";
  $("missing_SSN").innerHTML = "";
  $("missing_Check").innerHTML = "";
  $("first_Name").focus();
  $("review_Header").innerHTML = "";
  $("finance_App_Errors").innerHTML = "";
};

const validateForm = () => {
  "use strict";
  let firstName = $("first_Name").value,
    lastName = $("last_Name").value,
    email = $("email").value,
    emailConfirm = $("email_Confirm").value,
    city = $("city").value,
    state = $("state").value,
    zipCode = $("zip_Code").value,
    income = $("gross_Income").value,
    SSN = $("SSN").value,
    reviewMessage = "Please review and complete fields",
    agreementCheck = $("check_Agreement").checked,
    emailMatch = true,
    html = "",
    reviewHeader = "",
    isValid = true;

  if (firstName === "" || firstName.length > 10) {
    firstName = $("missing_First_Name").innerHTML = "Name Required";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("missing_First_Name").innerHTML = "";
  }

  if (lastName === "") {
    lastName = $("missing_Last_Name").innerHTML = "Last Name Required";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("missing_Last_Name").innerHTML = "";
  }

  if (email === "") {
    email = $("email_Missing").innerHTML = "Email Required";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("email_Missing").innerHTML = "";
  }

  if (emailConfirm === "") {
    emailConfirm = $("email_Confirm_Missing").innerHTML =
      "Email Confirmation Required";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("email_Confirm_Missing").innerHTML = "";
  }

  if (JSON.stringify(email) !== JSON.stringify(emailConfirm)) {
    emailMatch = false;
    $("email_Match").innerHTML = "Emails Do Not Match";
    $("emailConfrm_Match").innerHTML = "Emails Do Not Match";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("email_Match").innerHTML = "";
    $("emailConfrm_Match").innerHTML = "";
  }

  if (city === "") {
    city = $("missing_City").innerHTML = "City Required";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("missing_City").innerHTML = "";
  }

  if (state === "State") {
    state = $("missing_State").innerHTML = "Choose a State";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("missing_State").innerHTML = "";
  }

  if (zipCode === "") {
    zipCode = $("missing_Zip_Code").innerHTML = "Zip Code Required";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("missing_Zip_Code").innerHTML = "";
  }

  if (income === "") {
    income = $("missing_Gross_Income").innerHTML = "Gross Income Required";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("missing_Gross_Income").innerHTML = "";
  }

  if (SSN === "") {
    SSN = $("missing_SSN").innerHTML = "Last 4 Numbers of SSN Required";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    $("missing_SSN").innerHTML = "";
  }

  if (agreementCheck === false) {
    agreementCheck = $("missing_Check").innerHTML =
      "Confirm Agreement Statement";
    reviewHeader = reviewMessage;
    isValid = false;
  } else {
    agreementCheck = "Agreement Complete";
    $("missing_Check").innerHTML = "";
  }

  if (isValid && income >= 45000) {
    alert(
      "Congratulations, Your are prequalified for a loan. A representative will contact you soon."
    );
  }

  if (isValid && income < 45000) {
    alert("We're sorry, you do not qualify for a loan at this time.");
  }

  $("review_Header").innerHTML = reviewHeader;
  if (reviewHeader === reviewMessage) {
    html = html + `<tr class=""><td>First name:</td><td>${firstName}</td></tr>`;
    html = html + `<tr><td>Last name:</td><td>${lastName}</td></tr>`;
    html = html + `<tr><td>Email:</td><td>${email}</td></tr>`;
    html = html + `<tr><td>Confirm Email:</td><td>${emailConfirm}</td></tr>`;
    html = html + `<tr><td>Email Match:</td><td>${emailMatch}</td></tr>`;
    html = html + `<tr><td>City:</td><td>${city}</td></tr>`;
    html = html + `<tr><td>State:</td><td>${state}</td></tr>`;
    html = html + `<tr><td>Zip Code:</td><td>${zipCode}</td></tr>`;
    html = html + `<tr><td>Gross Income:</td><td>${income}</td></tr>`;
    html = html + `<tr><td>Last 4 of SSN:</td><td>${SSN}</td></tr>`;
    html =
      html + `<tr><td>Validate Agreement:</td><td>${agreementCheck}</td></tr>`;
    $("finance_App_Errors").innerHTML = html;
  }

  if (isValid) {
    $("submit_form").setAttribute("type", "submit");
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
  "use strict";
  $("submit_form").onclick = validateForm;
  $("reset_form").onclick = resetForm;
  $("first_Name").focus();
};
