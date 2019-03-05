var counter = function(arr){
  return 'Total elements ' + arr.length;
};

var adder = function(a,b){
  return `Total sum is ${a+b}`;
};

var pi = 3.1415;

//Three ways to export modules

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// module.exports.counter = function(arr){
//   return 'Total elements ' + arr.length;
// };
//
// module.exports.adder = function(a,b){
//   return `Total sum is ${a+b}`;
// };
//
// module.exports.pi = 3.1415;
