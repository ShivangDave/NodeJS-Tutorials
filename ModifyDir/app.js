var fs = require('fs');

//Blocking action
// fs.mkdirSync('./stuff');
// fs.rmdirSync('./stuff');

//Non-blocking actions
fs.mkdir('./stuff',function(){
  fs.readFile('readme.txt','utf8',function(err, data){
      fs.writeFile('./stuff/newFile.txt',data,function(err){
        if(err!=null){
          console.log(err);
        }
      });
  });
});

fs.unlink('./stuff/newFile.txt',function(){
  fs.rmdir('stuff',function(err){
    console.log(err);
  });
});
