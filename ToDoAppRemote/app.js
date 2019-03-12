var express = require('express');
var app = express();
var todoController = require('./controllers/todoController.js');

app.set('view engine','ejs');
app.use('/scripts',express.static('scripts'));

todoController(app);

app.listen(2000);
console.log('Now listening on port 2000');