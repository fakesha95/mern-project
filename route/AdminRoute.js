const express=require("express");
const router=express.Router();
const Admin = require('../models/adminSchema');

router.get("/",async (req,res)=>{
    res.send("admin panel") 
})

router.post('/addcategories',async(req,res)=>{
    try{
       const addCat=new Admin(req.body);
       const addCategory=await addCat.save();
       res.send(addCategory);
    }catch(err){
        console.log(err)
    }
});

router.post('/addsubcategories',async(req,res)=>{
    try{
       const addCat=new Admin(req.body);
       const addCategory=await addCat.save();
       res.send(addCategory);
    }catch(err){
        console.log(err)
    }
});

module.exports=router;