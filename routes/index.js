"Use Strict";

const router = require("express").Router(),
  publicRoutes = require("./publicRoutes"),
  privateRoutes = require("./privateRoutes");

router.use("/", publicRoutes);
router.use("/auth/", privateRoutes);

module.exports = router;
