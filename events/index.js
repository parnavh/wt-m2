/**
 * Events module in node.js
 * Things to keep in mind:
 *  - The order of declaration of events matter i.e if you declare an events 2 times, the first one will execute first then the second one will get executed
 *      eg. In the below code, we have declared eventEmmiter.once() first and then eventEmmiter.on(), so first the eventEmmiter.once() will execute and then the eventEmmiter.on() will get executed. If you reorder the declarations such that the eventEmmiter.on() is declared first, then the eventEmmiter.once(), first the .on() will get executed and then the .once() will get executed.
 *  - If you want to remove an event from the eventEmitter, you can use the .off() method, but it requires you to have the same function being passed as an argument as done below
 */

const events = require('events'); // import events module
const eventEmitter = new events.EventEmitter() // Create a event emmiter

function callback_function () {
    console.log('event is fired');
}

// Register a one-time listener for event 'eventName'
eventEmitter.once('eventName', function () {
    console.log('will run only once i.e. the first time')
})

// Register a listener for event 'eventName'
eventEmitter.on('eventName', callback_function)

// emit the event 4 times
eventEmitter.emit('eventName')
eventEmitter.emit('eventName')
eventEmitter.emit('eventName')
eventEmitter.emit('eventName')

// Remove the listener for event 'eventName'
eventEmitter.off('eventName', callback_function)

// These will not be fired as the listener has been removed
eventEmitter.emit('eventName')
eventEmitter.emit('eventName')
eventEmitter.emit('eventName')