require('dotenv').config();
const express = require('express');
const appServer = express();
const path=require('path');
const PORT=process.env.PORT || 6600;
const cors=require('cors');
const db_connection=require('./app/config/db')
const userRouter=require('./app/router/userRouter')

db_connection();

appServer.use(express.urlencoded({extended:true}));
appServer.use(express.static(path.join(__dirname,'uploads')));

appServer.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    res.setHeader('Cache-Control','no-store,no-cache,must-revalidate,proxy-revalidate');
    next();
});

appServer.use(cors());
appServer.use(userRouter)

appServer.use((req,res)=>{
    res.send(`<h1> Page not Found! Please check and try again </h1>`)
})
appServer.listen(PORT,()=>{
    console.log(`The Server is Running at: http://localhost:${PORT}`);
    
})
