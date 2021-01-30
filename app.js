const express = require('express');
const path =require ("path");
const app =express();
require("./db/conn");
//const static_path= path.join(__dirname,"../public")
const port= process.env.PORT || 3000;
app.set('view engine', '.hbs');
app.get('/',(req,res)=>{
    res.render("index");
})
app.listen(port,()=>{
    console.log("express is connected at 3000")

})