const mongoose = require('mongoose');
const Joi  = require('joi')
const config = require('config')
const jwt=  require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        minlength:1,
        maxlength:30,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        minlength:5,
        maxlength:40,
        required:true,
    },
    password:{
        type:String,
        minlength:8,
        maxlength:20,
        required:true,
    }
})
userSchema.methods.generateToken = function(){
    const token = jwt.sign({_id:this._id}, config.get('jwtPrivateKey'))
    return token;
} 
async function validateUser(user){
const schema=Joi.object({
  username:Joi.string().min(1).max(30).required(),
  email:Joi.string().min(5).max(30).required(),
  password:Joi.string().min(8).max(20).required(),
})
return schema.validate(user)
}


module.exports.userSchema = mongoose.model('users', userSchema)
module.exports.validateUser = validateUser