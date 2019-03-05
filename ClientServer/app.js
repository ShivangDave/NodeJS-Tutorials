var http = require('http');

var server = http.createServer(function(req,res){
  console.log('request was made: '+req.url);
  res.writeHead(200,{
    'Content-Type':'text/plain'
  });
  res.end('Hey There!');
});

server.listen(2000,'127.0.0.1');
console.log('Server is running... on port 2000');
