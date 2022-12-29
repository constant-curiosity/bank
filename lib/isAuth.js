"Use Strict";

const path = require("path");

module.exports = {
  isAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.sendFile(path.join(__dirname, "../client/views/unauthorized.html"));
    }
  },
};
