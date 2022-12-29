"Use Strict";

const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy,
  userProfile = require("../models/userProfileSchema"),
  validatePwd = require("../lib/genValidatePwd").validatePwd;

const customFields = {
  usernameField: "userEmail",
  passwordField: "userPassword",
};

const verifyUserCb = (userEmail, userPassword, done) => {
  userProfile
    .findOne({ userEmail: userEmail })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }
      const isValid = validatePwd(userPassword, user.hash, user.salt);
      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((error) => {
      done(error);
    });
};

const strategy = new LocalStrategy(customFields, verifyUserCb);
passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  userProfile
    .findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
