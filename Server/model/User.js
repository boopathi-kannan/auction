const mongoose=require('mongoose');


const UserSchema=mongoose.Schema({
     Email:{
        type:"String",
        required:true,
     },
     Name:{
        type:"String",
        required:false,
     },
     Password:{
        type:"String",
        required:true,
     }
});


module.exports=mongoose.model("User",UserSchema);