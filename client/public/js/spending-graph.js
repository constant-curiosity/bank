// /*Arrange this to use REAL data.*/
// const monthlySpending = [2005.0, 1471.31, 892.86, 531.6, 1646.0, 179.52];

// const $ = (id) => {
//   "Use Strict";
//   return document.getElementById(id);
// };

// const drawGraph = (spendingStrArr, spendingNumArr) => {
//   "Use Strict";
//   const canvas = $("spending_Graph");
//   const ctx = canvas.getContext("2d");
//   const tbody = document.querySelectorAll("#amount_Spent td");
//   const foodColor = "rgb(248, 249, 250)";
//   const autoColor = "rgb(255, 243, 205)";
//   const shoppingColor = "rgb(248, 215, 218)";
//   const billColor = "rgb(207, 226, 255)";
//   const mortgageColor = "rgb(207, 244, 252)";
//   const entertainmentColor = "rgb(209, 231, 221)";

//   let width = 50;
//   let x = 30;
//   for (let i = 0; i < spendingNumArr.length; i++) {
//     const colors = [
//       foodColor,
//       autoColor,
//       shoppingColor,
//       billColor,
//       mortgageColor,
//       entertainmentColor,
//     ];
//     ctx.fillStyle = colors[i];
//     ctx.strokeStyle = "rgb(0, 0, 0)";
//     ctx.strokeRect(
//       x,
//       canvas.height - spendingNumArr[i],
//       width,
//       spendingNumArr[i]
//     );
//     ctx.fillRect(
//       x,
//       canvas.height - spendingNumArr[i],
//       width,
//       spendingNumArr[i]
//     );
//     x += width + 80;
//   }

//   for (let i = 0; i < tbody.length; i++) {
//     tbody[i].innerText = `$${spendingStrArr[i]}`;
//   }

//   return (resetGraph = () => {
//     setTimeout(() => {
//       "Use Strict";
//       ctx.clearRect(0, 0, 750, 500);
//       const innerText = [];
//       for (let i = 0; i < tbody.length; i++) {
//         innerText.push(tbody[i].innerText);
//         tbody[i].innerText = "$0.00";
//       }
//     }, "1000");
//   });
// };

// const conversion = () => {
//   "Use Strict";
//   const spendingStr = [];
//   const spendingRounded = [];
//   for (let i = 0; i < monthlySpending.length; i++) {
//     const amount = monthlySpending[i];
//     spendingRounded.push(Math.trunc(amount / 5));
//     spendingStr.push(amount.toFixed(2).toString());
//   }
//   drawGraph(spendingStr, spendingRounded);
// };

// const hamburgerMenu = () => {
//   const dropDownNav = $("dropDownNav");
//   if (dropDownNav.style.display === "block") {
//     dropDownNav.style.display = "none";
//   } else {
//     dropDownNav.style.display = "block";
//   }
// };

// window.onload = () => {
//   "Use Strict";
//   conversion(monthlySpending);
//   $("reset_Btn").onclick = resetGraph;
//   $("undo_Btn").onclick = conversion;
// };
