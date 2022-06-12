const express=require('express');
const app=express();
const mongoose=require('mongoose')
require('dotenv').config()


app.listen(5000,()=>{
    console.log('server running');
})

mongoose.connect(process.env.DB_URL).then(()=>console.log('db connected')).catch((err)=>console.log(err))