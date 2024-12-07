const express=require('express');
const cors=require('cors');
require('./connection/conn');
const app=express();
const auth=require('./route/Auth');
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello!");
})

app.use('/api/v1',auth);


app.listen(19999,()=>{
    console.log("Server is running in Port : 19999");
})