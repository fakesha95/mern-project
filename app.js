const express=require('express');
const app=express();

require("./db/conn");

const CookieParser = require('cookie-parser');
app.use(CookieParser());
 
app.use(express.json());
app.use(require('./route/UserRoute'));


const PORT=7000;

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})