const express=require("express");
const cors = require('cors');
app.use(cors({ origin: '*' }));
const app=express();
const crypto=require("crypto");
const userRouter=require("./routers/userRoutes");
const postrouter=require("./routers/postRouter");
const commentRouter=require("./routers/commentRouter");
const jwt=require("./utils/jwt");

process.env.ACCESS_TOKEN_SECRET=crypto.randomBytes(64).toString('hex');
process.env.REFRESH_TOKEN_SECRET=crypto.randomBytes(64).toString('hex');
app.use(express.json());

// app.use((err, req, res, next) => {
//   console.error(err.message);
//   res.status(err.status || 500).json({ error: err.message });
// });
app.use('/',userRouter);
app.use('/posts',postrouter);
app.use('/',commentRouter);

module.exports=app;