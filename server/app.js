const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express()

dotenv.config({path:'./config.env'});

require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

const Port = process.env.PORT;

const middleWare = (req,res,next)=>{
    console.log("Hello middleWare");
    next();
}

// app.get('/', (req, res)=> {
//   res.send('Hello World')
// });

app.get('/about', middleWare, (req, res)=> {
    res.send('Hello World from about')
});

app.get('/contact', (req, res)=> {
    res.cookie('test','testing');
    res.send('Hello World from contact')
});

// app.get('/signin', (req, res)=> {
//     res.send('Hello signing in World')
// });

app.get('/signup', (req, res)=> {
    res.send('Hello World signup')
});

app.listen(Port)