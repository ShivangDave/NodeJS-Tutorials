var fs = require('fs');

//Blocking operation
var readme = fs.readFileSync('./readme.txt','utf8');
fs.writeFileSync('./newfile.txt',readme);

//Non-Blocking operation
fs.readFile('./readme.txt','utf8', function(err,data){
  console.log(data);
  fs.writeFile('./newfile.txt',data);
});

fs.unlink('readme.txt',function(err){
  console.log(err);
});
