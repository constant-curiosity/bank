"Use Strict";

const path = require("path"),
  PublicFinanceApp = require("../models/financeSchema"),
  userProfile = require("../models/userProfileSchema");

module.exports = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/auth/index.html"));
  },
  account: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/auth/account.html"));
  },
  deposit: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/auth/deposit.html"));
  },
  withdraw: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/auth/withdraw.html"));
  },
  spendingTrends: (req, res) => {
    res.sendFile(
      path.join(__dirname, "../client/views/auth/spendingtrends.html")
    );
  },
  finance: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/auth/finance.html"));
  },
  transactions: (req, res) => {
    res.sendFile(
      path.join(__dirname, "../client/views/auth/transactions.html")
    );
  },
  error: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/auth/error.html"));
  },
  depositPost: (req, res) => {
    userProfile
      .findOne({ _id: req.session.passport.user })
      .then((user) => {
        const toNumber = Number(req.body.deposit);
        user.deposits.push(toNumber);
        user.save();
        res.redirect("/auth/account.html");
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/auth/error.html");
      });
  },
  withdrawPost: (req, res) => {
    userProfile
      .findOne({ _id: req.session.passport.user })
      .then((user) => {
        const toNumber = Number(req.body.withdraw);
        user.withdraws.push(toNumber);
        user.save();
        res.redirect("/auth/account.html");
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/auth/error.html");
      });
  },
  logout: (req, res) => {
    req.logout((error) => {
      if (error) {
        console.log(error);
        return next(error);
      }
      res.redirect("/");
    });
  },
  authFinanceAppPost: (req, res) => {
    const newFinancePost = new PublicFinanceApp({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      gross_income: req.body.gross_income,
      social_num: req.body.social_num,
    });
    newFinancePost
      .save()
      .then(() => {
        res.redirect("/auth/index.html");
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/auth/error.html");
      });
  },
  transactionsPost: (req, res) => {
    userProfile
      .findOne({ _id: req.session.passport.user })
      .then((user) => {
        user.purchases.push({
          date: req.body.date,
          description: req.body.description,
          category: req.body.category,
          amount: req.body.amount,
        });
        user.save();
        res.redirect("/auth/account.html");
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/auth/error.html");
      });
  },
  transactionsfetch: (req, res) => {
    userProfile
      .findOne({ _id: req.session.passport.user })
      .then((user) => {
        res.send(user.purchases);
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/auth/error.html");
      });
  },
};
