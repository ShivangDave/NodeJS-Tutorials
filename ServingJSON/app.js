var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('Request made on '+req.url);
  res.writeHead(200,{
    'Content-type':'application/json'
  });
  var myObject = {
    name:'Ryan',
    job:'ninja',
    age: 30
  };
  res.end(JSON.stringify(myObject));
});
server.listen(2000,'127.0.0.1');
console.log('Now listening on 2000');
