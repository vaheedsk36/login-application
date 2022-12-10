const express = require("express");
const path = require("path");

const router = require('./router')
const app = express();
const bodyparser = require("body-parser");
const session = require("express-session");
const {v4:uuidv4} = require("uuid");

// app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

// setting the view engine (ejs)
app.set('view engine','ejs');

// load statis assets
app.use('/static',express.static(path.join(__dirname,"public")));
app.use('/assets',express.static(path.join(__dirname,"public/assets")));

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}));

app.use('/route',router);

app.get('/',(req,res)=>{
    res.render('base',{title:"Login Application"})
})

app.listen(2020,()=>{
    console.log("Services is listening at PORT:2020")
})