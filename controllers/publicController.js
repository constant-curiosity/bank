"Use Strict";

const path = require("path"),
  PublicFinanceApp = require("../models/financeSchema"),
  userProfile = require("../models/userProfileSchema"),
  genPwd = require("../lib/genValidatePwd").genPwd,
  passport = require("passport");

module.exports = {
  index: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/index.html"));
  },
  account: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/account.html"));
  },
  login: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/login.html"));
  },
  resetPwd: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/resetPwd.html"));
  },
  resetPwdSignIn: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/resetPwdSignIn.html"));
  },
  userNotFoundReset: (req, res) => {
    res.sendFile(
      path.join(__dirname, "../client/views/userNotFoundReset.html")
    );
  },
  registration: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/registration.html"));
  },
  registerThankYou: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/registerThankYou.html"));
  },
  finance: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/finance.html"));
  },
  error: (req, res) => {
    res.sendFile(path.join(__dirname, "../client/views/error.html"));
  },
  financeAppPost: (req, res) => {
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
        res.redirect("/");
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/error.html");
      });
  },
  registrationSignUpPost: (req, res) => {
    const saltHash = genPwd(req.body.userPassword),
      salt = saltHash.salt,
      hash = saltHash.hash,
      newRegistrationSignUpPost = new userProfile({
        userEmail: req.body.userEmail,
        hash: hash,
        salt: salt,
      });
    newRegistrationSignUpPost
      .save()
      .then(() => {
        res.redirect("/registerThankYou.html");
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/error.html");
      });
  },
  resetPwdPost: (req, res) => {
    userProfile
      .findOne({
        userEmail: req.body.userEmail,
      })
      .then((user) => {
        if (user) {
          const saltHash = genPwd(req.body.userPassword);
          user.salt = saltHash.salt;
          user.hash = saltHash.hash;
          user.save();
          res.redirect("/resetPwdSignIn.html");
        } else {
          res.redirect("/userNotFoundReset.html");
        }
      })
      .catch((error) => {
        console.log(error);
        res.redirect("error.html");
      });
  },
  loginAuthenticate: passport.authenticate("local", {
    failureRedirect: "userNotFoundReset.html",
    successRedirect: "/auth/account.html",
  }),
};
