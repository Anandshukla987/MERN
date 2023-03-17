const mongoose = require('mongoose')
const express = require('express')
const app = express()

const db = 'mongodb+srv://Naman:qazwsxedc@cluster0.g4ywuf0.mongodb.net/mernStack?retryWrites=true&w=majority';

mongoose.connect(db).then(()=>console.log("Connection succesful")).catch((err)=>console.log(err));

const middleWare = (req,res,next)=>{
    console.log("Hello middleWare");
    next();
}

app.get('/', (req, res)=> {
  res.send('Hello World')
});

app.get('/about', middleWare, (req, res)=> {
    res.send('Hello World from about')
});

app.get('/contact', (req, res)=> {
    res.send('Hello World from contact')
});

app.get('/signin', (req, res)=> {git 
    res.send('Hello signing in World')
});

app.get('/signup', (req, res)=> {
    res.send('Hello World signup')
});

app.listen(3000)