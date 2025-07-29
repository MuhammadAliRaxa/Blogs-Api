const comment=require("../controllers/commentController");
const express=require("express");
const router=express.Router();


router.post('/posts/:id/comments',comment.createComment);
router.get('/posts/:id/comments',comment.getCommentsByPost);
router.delete('/posts/:id/comments/:id',comment.deleteComment);
router.get('/posts/:id/comments/:id',comment.getCommentsByIDPost);

module.exports=router;