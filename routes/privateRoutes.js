"Use Strict";

const router = require("express").Router(),
  privateController = require("../controllers/privateController"),
  isAuth = require("../lib/isAuth").isAuth;

router.get("/index.html", isAuth, privateController.index);
router.get("/error.html", isAuth, privateController.error);
router.get("/account.html", isAuth, privateController.account);
router.get("/spendingtrends.html", isAuth, privateController.spendingTrends);
router.get("/finance.html", isAuth, privateController.finance);
router.get("/logout.html", privateController.logout);
router.get("/deposit.html", isAuth, privateController.deposit);
router.get("/withdraw.html", isAuth, privateController.withdraw);
router.get("/transactions.html", isAuth, privateController.transactions);
router.get("/transactionsfetch", isAuth, privateController.transactionsfetch);

router.post("/transactions.html", isAuth, privateController.transactionsPost);
router.post("/withdraw.html", isAuth, privateController.withdrawPost);
router.post("/deposit.html", isAuth, privateController.depositPost);
router.post("/finance.html", isAuth, privateController.authFinanceAppPost);

module.exports = router;


