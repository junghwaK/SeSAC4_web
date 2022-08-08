const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", user.main);
router.post("/register", user.post_register);
router.get("/login", user.login);
router.post("/profile", user.post_login);

module.exports = router;