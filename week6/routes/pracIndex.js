const express = require("express");
const userRouter = express.Router();
const user = require("../controller/pracUserController");

// router.get("/a", function(req, res){
//     res.send("index");
// });

userRouter.get("/", user.index);
userRouter.get("/register", user.register); 
//함수가 선언되어있는것을 불불러온거임 유저컨드롤러 사람들 그래서 겟유저라고 내 로컬호스트창에 뜬다.
userRouter.post("/register", user.post_register); 

userRouter.get("/login", user.login);
userRouter.post("/login", user.post_login);

module.exports = userRouter;

// module.exports = router;
//한개만 모듈로 내보내짐.
