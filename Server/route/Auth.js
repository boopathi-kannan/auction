const router=require('express').Router();
const UserSchema=require('../model/User');

router.post('/Register',async(req,res)=>{
    try
    {
    console.log(req.body);
    const {Email,Name,Password}=req.body;
    const Schema=new UserSchema({Email,Name,Password});
    Schema.save();
    res.send({message:"Hello"})
    }
    catch(err)
    {
        console.log(err);
    }
})



module.exports=router;