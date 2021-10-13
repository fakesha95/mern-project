const dotenv=require('dotenv');
const express=require('express');
const app=express();

dotenv.config({path:"./config.env"});
require("./db/conn");

const CookieParser = require('cookie-parser');
app.use(CookieParser());
 
app.use(express.json());

// app.use('/user',require('./route/UserRoute'));
// app.use('/admin',require('./route/AdminRoute'));
app.use(require('./route/UserRoute'))

const PORT=7000;

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})