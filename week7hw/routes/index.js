const express = require("express");
const user = require("../controller/UserController");
const router = express.Router();

router.get("/", user.main);
router.post("/register", user.post_register);
router.get("/login", user.login_page);
router.get("/login", user.login);
router.post("/login", user.Login);
//user/lofin으로 post한 데이터 요청
router.post("/profile", user.post_login);
router.post("/profile", user.profile);
//로그인 성공시 일반 폼 전송 부분

module.exports = router;