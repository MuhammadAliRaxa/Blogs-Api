const commentModel=require("../models/commentModel");

const createComment = async (req,res,next)=>{
    const { content } = req.body;
    const postId = req.params.id;
    const comment = await commentModel.insertOne({ content, postId });
    if(!comment) return res.status(500).send("Something Wrong");
    res.status(201).json(comment);
  
};
const getCommentsByPost = async (req, res, next) => {
    const postId = req.params.id;
    const comments = await commentModel.find({ postId });
    if(!comments) return res.status(500).send("Something Wrong");
    res.json(comments);
};
const getCommentsByIDPost = async (req, res, next) => {
    const postId = req.params.id;
    const commentId=req.params.id;
    const comments = await commentModel.findOne({_id:commentId});
    if(!comments) return res.status(500).send("Something Wrong");
    res.json(comments);
};
const deleteComment = async (req,res,next)=>{
    const postId = req.params.id;
    const commentId=req.params.id;
    const existed=await commentModel.findOne({_id:commentId});
    if(!existed) return res.status(404).send("Not Found");
    const comment = await commentModel.deleteOne({_id:commentId});
    res.status(200).json(comment);
};
module.exports={createComment,getCommentsByPost,deleteComment,getCommentsByIDPost};