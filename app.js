const express = require('express');
const path =require ("path");
const app =express();
require("./db/conn");
//const static_path= path.join(__dirname,"../public")
const port= process.env.PORT || 4000;
app.set('view engine', '.hbs');
app.get('/',(req,res)=>{
    res.render("login");
})
app.get('/login',(req,res)=>{
    res.render("login");
})
app.listen(port,()=>{
    console.log("express is connected at 4000")

})