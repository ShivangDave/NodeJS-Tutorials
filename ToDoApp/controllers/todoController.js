var bodyParser = require('body-parser');
var urlEncoder = bodyParser.urlencoded({extended: false});

var data = [];

module.exports = function(app){

    app.get('/index',function(req,res){
        res.render('index',{todos:data});
    });

    app.post('/index',urlEncoder,function(req,res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/index:item',function(req,res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g,'-') !== req.params.item
        });
        res.json(data);
    });
};