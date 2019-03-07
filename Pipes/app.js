var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');
//
// myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req,res){
  console.log('Request was made on: '+req.url);
  res.writeHead(200,{
    'Content-Type':'text/plain'
  });

  var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
  myReadStream.pipe(res);

});
server.listen(2000,'127.0.0.1');
console.log('Now listening on port 2000');
