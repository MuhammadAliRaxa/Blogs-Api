const postmodel=require('../models/postModel');

const createPost= async (req,res,next)=>{
    try {
    const userModel=req.user;
    const {title,content}=req.body;
    if(!title||!content) return res.status(500).send("title and content are required");
    const existed=await postmodel.findOne({title:title});
    if(existed) return res.status(500).send("Title already existed");
    const createData=await postmodel.insertOne({title:title,content:content,author:userModel._id});
    res.status(201).json(createData);
    } catch (error) {
        next(error);
    }
};
const getPosts= async (req,res,next)=>{
    try {
        const posts=await postmodel.find();
        if(posts.length==0) return res.status(404).send("Not Added yet");
        res.status(201).json(posts);
    } catch (error) {
        next(error);
    }
};
module.exports={createPost,getPosts};