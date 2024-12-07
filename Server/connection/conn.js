const mongoose=require('mongoose');


const conn=()=>{
    try {
        const res=mongoose.connect('mongodb+srv://abishek:1234@cluster0.evq4u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log("DB connected successfully!");
    } catch (error) {
        console.log("Error in connecting with mongoDB!");
    }
}

conn();