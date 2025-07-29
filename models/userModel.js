const mongodb=require('mongoose');

const userModel=new mongodb.Schema(
    {
        email:String,
        password:String,
        name:String,
        number:String,
        refreshTokens: [{
        token: String,
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 604800
        }
    }]
    }
);
userModel.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});
module.exports=mongodb.model('User',userModel);