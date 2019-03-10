var express = require('express');
var app = express();
var todoController = require('./controllers/todoController');

app.set('view engine','ejs');
app.use('/assets',express.static('./assets'));

todoController(app);

app.listen(2000);
console.log('listening on port 2000');