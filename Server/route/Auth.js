const router=require('express').Router();
const UserSchema=require('../model/User');

router.post('/Register',async(req,res)=>{
    try
    {
    console.log(req.body);
    const {Email,Name,Password}=req.body;
    const Schema=new UserSchema({Email,Name,Password});
    await Schema.save();
    res.status(201).send({message:"User registered successfully!"});
    }
    catch(err)
    {
        res.status(500).send({error:"Internal Server Error"});
        console.log(err);
    }
})


router.post('/Login',async(req,res)=>{
    try
    {
        const {Email,Password}=req.body;
        const UserData=await UserSchema.findOne({Email});
        if(!UserData)
            {
                res.status(400).send({message:"Please register first!"});
                return;
            }
        if(UserData.Password==Password)
        {
            res.status(200).send({message:"User Logged in successfully!",data:UserData});
        }
        else{
            res.status(210).send({message:"Incorrect Password!"});
        }
    }
    catch(err)
    {
        res.send({message:"Internal server error!",data:err});
    }
})


module.exports=router;