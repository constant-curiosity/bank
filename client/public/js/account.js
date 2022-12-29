const $ = (id) => {
  "Use Strict";
  return document.getElementById(id);
};

const fillAccountTable = (transactions) => {
  "Use Strict";
  const table = $("accountTransactions");
  for (let i = 0; i < transactions.length; i++) {
    const row = table.insertRow();
    (row.insertCell().innerHTML = transactions[i].date),
      (row.insertCell().innerHTML = transactions[i].description),
      (row.insertCell().innerHTML = transactions[i].category),
      (row.insertCell().innerHTML = `$${transactions[i].amount.toFixed(2)}`);
  }
};

const calulateBalance = (transactions) => {
  "Use Strict";
  let totalCredit = 0;
  let totalDebit = 0;
  for (let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    let amount = transactions[i].amount;
    if (category === "Deposit") {
      totalCredit += amount;
    } else {
      totalDebit += amount;
      console.log(totalDebit);
    }
  }

  let balance = totalCredit.toFixed(2) - totalDebit.toFixed(2);
  $("displayBalance").innerHTML = `<b>Balance: $${balance.toFixed(2)}</b>`;
};

window.onload = () => {
  "Use Strict";
  const fetchTransactions = fetch(
    "/auth/transactionsfetch"
  );
  fetchTransactions
    .then((res) => res.json())
    .then((data) => fillAccountTable(data))
    .catch((error) => {
      console.log(`Error Message: ${error.message}`);
    });
  const fetchTransactionsAgain = fetch(
    "/auth/transactionsfetch"
  );
  fetchTransactionsAgain
    .then((res) => res.json())
    .then((data) => calulateBalance(data))
    .catch((error) => {
      console.log(`Error Message: ${error.message}`);
    });
};
