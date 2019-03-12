var bodyParser = require('body-parser');
var urlEncoder = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:<password>@cluster0-uhose.gcp.mongodb.net/todoModel?retryWrites=true',{useNewUrlParser: true});

var todoSchema = mongoose.Schema({
    item: String
});

var todoModel = mongoose.model('todoModel',todoSchema);

module.exports = function(app){
    
    app.get('/',function(req,res){
        todoModel.find({},function(err,tasks){
            if(err) throw err;
            res.render('index',{task:tasks});
        });
    });

    app.post('/',urlEncoder,function(req,res){
        var sometask = new todoModel(req.body);
        sometask.save(function(err,tasks){
            if(err) throw err;
            res.json(tasks);
        });
    });

    app.delete('/:item',function(req,res){
        todoModel.findOneAndDelete({item: req.params.item},function(err,tasks){
            if(err) throw err;
            res.json(tasks);
        });
   });
}