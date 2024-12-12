const mongoose=require('mongoose');


const Contact=new mongoose.Schema({
    Email:{
        type:String,
    },
    Subject:{
        type:String,
    },
    Message:{
        type:String
    }
})

module.exports = mongoose.model('Contact', Contact);