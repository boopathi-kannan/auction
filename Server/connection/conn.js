const mongoose=require('mongoose');


const conn=()=>{
    try {
        const res=mongoose.connect('mongodb://localhost:27017');
        console.log(res.status);
        console.log("DB connected successfully!");
    } catch (error) {
        console.log("Error in connecting with mongoDB!");
    }
}

conn();