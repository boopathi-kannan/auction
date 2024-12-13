const mongoose=require('mongoose');


const conn=()=>{
    try {
        const res=mongoose.connect('mongodb+srv://abi:2005@cluster0.q0rd5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log("DB connected successfully!");
    } catch (error) {
        console.log("Error in connecting with mongoDB!");
    }
}

conn();