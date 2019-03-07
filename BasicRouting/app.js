var http = require('http');
var fs = require('fs');

function respondWithPage(req){

};

var server = http.createServer(function(req,res){
  console.log('Req made on '+req.url);
  if(req.url === '/' || req.url === '/home'){
    res.writeHead(200,{
      'Content-type':'text/html'
    });
    fs.createReadStream(__dirname+'/index.html').pipe(res);
  }
  else if(req.url === '/contact'){
    res.writeHead(200,{
      'Content-type':'text/html'
    });
    fs.createReadStream(__dirname+'/contact.html').pipe(res);
  }
  else if(req.url === '/api/users'){
    res.writeHead(200,{
      'Content-type':'application/json'
    });
    var myObject = [{
      name:'Ryan',
      job:'ninja',
      age: 30
    },
    {
      name:'Debbie',
      job:'ninja',
      age: 19
    }];
    res.end(JSON.stringify(myObject));
  }
  else {
    res.writeHead(404,
    {
      'Content-Type':'text/html'
    });
    fs.createReadStream(__dirname+'/404.html').pipe(res);
  }
});
server.listen(2000,'127.0.0.1');
console.log('Now listening on 2000');
