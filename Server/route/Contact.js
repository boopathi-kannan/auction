const router = require("express").Router();

const Contact=require('../model/Contact');
router.post('/sendForm',async(req,res)=>{
    try
    {
        const {Email,Subject,Message}=req.body;
        const Data=new Contact({Email,Subject,Message});
        const response=await Data.save();
        res.status(201).send({message:"Data vanthirichu mapla🤩! nandri🙏"});
    } 
    catch(error)
    {
        res.status(404).send({message:"iyyo error uhh!"});
    }
});


router.get('/getForm',async(req,res)=>{
    try
    {
        const Data= await Contact.find();
        const response=Data;
        res.status(201).send({message:"Intha data!🙏",data:Data});
    } 
    catch(error)
    {
        res.status(404).send({message:"iyyo error uhh!"});
    }
});


module.exports=router;