// function sayHello(name){
//     console.log("meow" + name)
// }

// sayHello('meowsh')
// console.log()

// setTimeout()
// clearTimeout();

// setInterval()
// clearInterval()


// var message = '';
// console.log(global.message);

// const logger = require('./logger');
// logger.log('meow')
// console.log(logger)\

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('message logged', function(){console.log("listener called")});
emitter.emit('message logged');