const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({
    content:String,
    postId:{type:mongoose.Schema.Types.ObjectId,ref:'Post',required : true},
});

module.exports=mongoose.model("Comment",commentSchema);