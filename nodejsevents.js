const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterfull', () => {
    console.log('please turn off motor');
    setTimeout(() => {
        console.log('please turn off motor , its reminder');
    }, 3000);
})

myEmitter.emit('waterfull');
console.log('the script is running');