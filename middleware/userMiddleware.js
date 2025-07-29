const userModel=require("../models/userModel");
const {verifyAccessToken}=require("../utils/jwt");
const User=require("../models/userModel");
const checkUserNotExists= async(req,res,next)=>{
    const {email}=req.body;
    let exists=await userModel.findOne({email:email});

    if(exists) return res.status(500).send("Alredy Exists");
};
const checkValidUserExists= async (req,res,next)=>{
    const {email,password}=req.body;
    const exists=await userModel.findOne({email:email});
    if(!exists) return res.status(500).send("Not Found");
    if(exists.password!=password) return res.status(500).send("Invalid email or password");
    next();
};

const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: 'Access token required' });
        }

        const decoded = verifyAccessToken(token);
        const user = await User.findById(decoded.id).select('-password -refreshTokens');
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Access token expired' });
        }
        return res.status(403).json({ error: 'Invalid token' });
    }
};


module.exports={authenticateToken,checkValidUserExists,checkUserNotExists};