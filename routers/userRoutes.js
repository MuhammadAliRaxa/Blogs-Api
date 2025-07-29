const user=require("../controllers/userController");
const express=require("express");
const router=express.Router();
const userMiddleware=require("../middleware/userMiddleware");

router.post('/user/regiter',userMiddleware.checkUserNotExists,user.createUser);
router.post('/user/login',userMiddleware.checkValidUserExists,user.getUser);

module.exports=router;