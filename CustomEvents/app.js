var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person,events.EventEmitter);

var james = new Person('James');
var jane = new Person('Jane');
var mary = new Person('Mary');

var people = [james,jane,mary];

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name +' said: '+msg);
  });
});

james.emit('speak','Hey what up?');
mary.emit('speak','Nothing much. U say!!!');
// var emitter = new events.EventEmitter();
//
// emitter.on('someEvent',function(msg){
//   console.log(msg);
// });
//
// emitter.emit('someEvent','Event fired!');
