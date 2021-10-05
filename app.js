const express=require('express');
const app=express();

require("./db/conn");

app.use(express.json());
app.use(require('./route/UserRoute'));

const PORT=9000;

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})