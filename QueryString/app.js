const express = require('express');
var app = express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
  res.render('index.ejs');
});

app.get('/contact',function(req,res){
  res.render('contact.ejs',{qstr:req.query});
});

app.get('/profile/:name',function(req,res){
  var data = {
    age: 30,
    job: 'ninja',
    hobbies: ['eat','sleep','repeat']
  };
  res.render('profile.ejs',{name: req.params.name, data: data});
});

app.listen(2000);
console.log('Listening on port 2000');
