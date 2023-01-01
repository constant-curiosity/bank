

const $ = (id) => {
  "Use Strict";
  return document.getElementById(id);
};

const checkSubmitTransactions = () => {
  "Use Strict";
  let date = $("date").value,
    description = $("description").value,
    category = $("category").value,
    amount = $("amount").value,
    isValid = true;

  const dateFormat =
    /(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])\/((19|20)\d\d)/;

  const amountFormat = /^(0(?!\.00)|[1-9]\d{0,6})\.\d{2}$/;

  if (!dateFormat.test(date)) {
    $("date_Missing").innerHTML =
      "Please enter the correct date format: 00/00/0000";
      isValid = false;
  }
  if (dateFormat.test(date)) {
    $("date_Missing").innerHTML = "";
  }

  if (!amountFormat.test(amount)) {
    $("amount_Missing").innerHTML =
      "Please enter the correct currency format: 0.00";
      isValid = false;
  }
  if (amountFormat.test(amount)) {
    $("amount_Missing").innerHTML = "";
  }

  if (description === "") {
    $("description_Missing").innerHTML = "Description required";
    isValid = false;
  } else {
    $("description_Missing").innerHTML = "";
  }
  if (category === "Category") {
    $("category_Missing").innerHTML = "Please select a category";
    isValid = false;
  } else {
    $("category_Missing").innerHTML = "";
  }

  if (isValid) {
    $("submit_Btn").setAttribute("type", "submit");
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
  $("submit_Btn").onclick = checkSubmitTransactions;
  $("date").focus();
};
