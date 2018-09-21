require('../config/config');

const express = require('express');
const bodyParser = require('body-parser');

//local require
// var {mongoose}=require('../db/mongoose');
var {mongoose}=require('../config/config');
var {Book}=require('../models/book');

var app=express();
app.use(bodyParser.json());
const port=process.env.PORT||3000;


//post req //save to db
app.post('/Book', (req, res) => { //books is collection name
  // console.log(req.body);
  var book = new Book({
    bookName: req.body.bookName
  })
  book.save().then((doc) => {
    res.send(doc);
  }, (e) => { 
    res.status(404).send(e);
  });
});

//get req //fetch data from db
app.get('/Book',(req,res)=>{
  Book.find().then((book)=>{
    res.send({book});
  },(e)=>{
    res.status(400).send(e);
  })
})





//port
app.listen(port,()=>{
  console.log(`started on port ${port}`);
})

module.exports={app};