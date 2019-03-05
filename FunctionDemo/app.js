//normal function

function sayHi(){
    console.log('Hi');
}
sayHi();

//function expression
function callFunction(func){
    func();
}

var sayBye = function(){
  console.log('Bye');
};

callFunction(sayBye);
