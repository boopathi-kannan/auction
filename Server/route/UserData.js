const router = require("express").Router();
const UserData=require('../model/UserData');

router.post('/addData',async(req,res)=>{
     try {
        const {Name,Email,Phone,Gender}=req.body;
        const x=new UserData({Name,Email,Phone,Gender});
        await x.save();
        res.status(200).send({message:"Data saved successfully!"});
     } catch (error) {
        res.status(500).send({message:"Data not saved!"});
     } 
});

router.get('/getData',async(req,res)=>{
    try {
       const {Email}=req.body;
       const Data= await UserData.findOne({Email});
       res.status(200).send({message:"Intha vaichuko!",data:Data});
    } catch (error) {
       res.status(500).send({message:null,data:null});
    } 
});

module.exports=router;