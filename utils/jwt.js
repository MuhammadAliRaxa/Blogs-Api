const jwt = require('jsonwebtoken');
const User=require("../models/userModel");

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'your_access_token_secret_key_here';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your_refresh_token_secret_key_here';

const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = (payload) => {
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

const verifyRefreshToken = (token) => {
    return jwt.verify(token,process.env.REFRESH_TOKEN_SECRET);
};

module.exports={generateAccessToken,generateRefreshToken,verifyAccessToken,verifyRefreshToken};