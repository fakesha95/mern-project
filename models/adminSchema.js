const mongoose=require('mongoose');

const adminSchema=new mongoose.Schema({
  car:{
    type:String,
    required:true
  },

  bike:{
    type:String,
    required:true
  },

  carType:{
    type:String,
    required:true
  },

  bikeType:{
    type:String,
    required:true
  },

})

const Admin=new mongoose.model('ADMIN',adminSchema)
module.exports=Admin;

