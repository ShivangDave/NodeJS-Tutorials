var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('index');
})

app.get('/contact',function(req,res){
  res.render('contact');
});

app.get('/404',function(req,res){
  res.sendFile(__dirname+'/404.html');
});

app.get('/profile/:name',function(req,res){
  var data = {
    age: 40,
    job: 'ninja',
    hobbies: ['eat','sleep','repeat']
  };
  res.render('profile',{person: req.params.name, data: data});
});

app.listen(2000,'127.0.0.1');
