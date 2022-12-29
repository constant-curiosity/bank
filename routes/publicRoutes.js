"Use Strict";

const router = require("express").Router(),
  publicController = require("../controllers/publicController");

router.get("/", publicController.index);
router.get("/index.html", publicController.index);
router.get("/error.html", publicController.error);
router.get("/finance.html", publicController.finance);
router.get("/login.html", publicController.login);
router.get("/resetPwd.html", publicController.resetPwd);
router.get("/registration.html", publicController.registration);
router.get("/registerThankYou.html", publicController.registerThankYou),
router.get("/resetPwdSignIn.html", publicController.resetPwdSignIn);
router.get("/userNotFoundReset.html", publicController.userNotFoundReset);

router.post("/finance.html", publicController.financeAppPost);
router.post("/resetPwd.html", publicController.resetPwdPost);
router.post("/registration.html", publicController.registrationSignUpPost);
router.post("/login.html", publicController.loginAuthenticate);

module.exports = router;


