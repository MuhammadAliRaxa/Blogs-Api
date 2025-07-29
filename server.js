const app=require("./app");
require('dotenv').config;
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Blogs").then(()=>{
    console.log("mongoose Connected Successfully");
    app.listen(3000, () => console.log("Server on http://localhost:3000"));
}).catch((error)=>{
   console.error(error);
});
