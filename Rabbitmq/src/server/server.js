const express = require('express');
const app=express();



app.get('/api',(req,res)=>{
    res.send("Hello there!");
});

app.listen(8000,()=>{
    console.log("listening on port 5000");
})