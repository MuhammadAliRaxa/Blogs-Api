const express = require("express");
const router = express.Router();
const post=require("../controllers/postController");
const userMiddleware=require("../middleware/userMiddleware");


router.post("/",userMiddleware.authenticateToken,post.createPost);
router.get("/",post.getPosts)
module.exports=router;