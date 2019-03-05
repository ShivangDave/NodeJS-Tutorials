console.log(__dirname);
console.log(__filename);

console.log('Hello');

setTimeout(function(){
  console.log('Hello after 3 seconds');
},3000)

var time = 0;
var timer = setInterval(function(){
  time+=2;
  console.log('Hello after '+time+' seconds');
  if(time>5)
  {
    clearInterval(timer);
  }
},2000)

var time = 0;
setInterval(function(){
  time+=2;
  console.log('Hello after '+time+' seconds');
},2000)
