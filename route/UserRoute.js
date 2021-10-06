const express=require('express');
const router=express.Router();
const User=require("../models/userSchema");
const bcrypt=require('bcryptjs');

router.get('/',(req,res)=>{
    res.send('hello route')
})

router.post("/signup",async (req,res)=>{
    try{
        const {email,phone,password}=req.body;

        if(!email || !password || !phone){
            return res.status(422).json({error:"please fill all the fields"})
        }

        const userExist=await User.findOne({email})
        if(userExist){
            return res.status(422).json({error:"user already exist"})
        }else{
            const user= new User ({email,phone,password})

            const salt=await bcrypt.genSalt(10);
            user.password=await bcrypt.hash(user.password,salt)
        
            const newUser=await user.save();
            
            return res.status(201).json({msg:"User Registered Successfully"})
        } 
        
    }catch(err){
        console.log(err)
    }
})

router.post("/login",async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(422).json({error:"please fill all the fields"})
        }

        const userLogin=await User.findOne({email})
        if(!userLogin){
            return res.status(422).json({error:"Invalid Credentials"})
        }else{
            return res.status(201).json({msg:"User Login Successfull"})
        }
    }catch(err){
        console.log(err)
    }
})

module.exports=router