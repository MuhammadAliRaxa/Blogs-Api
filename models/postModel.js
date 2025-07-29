const mongodb=require("mongoose");

const postSchema=new mongodb.Schema({
   title:{type:String,required:true},
   content:String,
   author:{
      type:mongodb.Schema.Types.ObjectId,ref:'User',required : true
   }
});


module.exports=mongodb.model("Post",postSchema);