"Use Strict";

const crypto = require("crypto");

module.exports = {
  genPwd: (pwd) => {
    const salt = crypto.randomBytes(32).toString("hex"),
      genHash = crypto
        .pbkdf2Sync(pwd, salt, 10000, 64, "sha512")
        .toString("hex");
    return {
      salt: salt,
      hash: genHash,
    };
  },
  validatePwd: (pwd, hash, salt) => {
    const hashVerify = crypto
      .pbkdf2Sync(pwd, salt, 10000, 64, "sha512")
      .toString("hex");
    return hash === hashVerify;
  },
};
