const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true
  },

  phone:{
    type:String,
    required:true
  },

  password:{
    type:String,
    required:true
  }
})

const User=new mongoose.model('USER',userSchema)
module.exports=User;

