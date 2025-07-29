const userModel=require("../models/userModel");
const {generateAccessToken,generateRefreshToken,verifyAccessToken,verifyRefreshToken}=require("../utils/jwt");

const createUser=async (req,res)=>{
    const {email,password,name,number}=req.body;
    const user=await userModel.create({email,password,name,number});
    if(!user) return res.status(500).send("Something Wrong");
    res.status(201).json(user);
};
const getUser=async (req,res)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({email:email,password:password});
    if(!user) return res.status(404).send("Not Found");
    generateAccessToken(
        {
            id:user._id
        }
    );
    const token=generateRefreshToken({
        id:user._id
    });
    user.refreshTokens.push({token:token});
    await user.save();
    
    res.status(201).json(user);
};

module.exports={getUser,createUser};
