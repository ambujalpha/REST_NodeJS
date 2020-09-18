const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//routes
app.get('/',(req,res)=>{
    res.send('hello');
});

app.get('/posts',(req,res)=>{
    res.send('hello posts');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, ()=>
    console.log('connected to DB')
);

app.listen(3000);