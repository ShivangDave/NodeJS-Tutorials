var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
  res.render('index.ejs');
});

app.get('/profile/:name',function(req,res){
  var data = {
    age: 30,
    job: 'ninja',
    hobbies: ['eat','sleep','repeat']
  }
  res.render('profile.ejs',{name: req.params.name, data: data})
});

app.get('/contact',function(req,res){
  res.render('contact',{qstr: req.query});
});

app.post('/contact', urlEncodedParser, function(req,res){
  if(!req.body){
    return res.sendStatus(400);
  }else{
    res.render('contact-success',{data: req.body});
  }
});

app.listen(2000)
console.log('Now listening on port 2000');
