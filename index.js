const express = require("express");
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('base',{title:"Login Application"})
})

app.listen(2020,()=>{
    console.log("Services is listening at PORT:2020")
})