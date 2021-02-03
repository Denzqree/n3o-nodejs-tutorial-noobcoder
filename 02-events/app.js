const { pseudoRandomBytes } = require('crypto');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//------------------------------------------------------
// This code is going to be executed when the 'tutorial'
// event is emitted
// Note that the first argument is the event name,
// and the second is the function we want to execute
// when the 'tutorial' event is emitted
//------------------------------------------------------
// We can pass a function with empty parameters
// eventEmitter.on('tutorial', ()=>{
//     console.log('tutorial event has occured');
// })

// We can also add some parameters to our function
eventEmitter.on('tutorial', (num1,num2)=>{
    console.log('tutorial event triggered : sum of '+num1+' and '+num2+' is : '+(num1+num2));
})

// Emitting 'tutorial' event (for argument-less function)
// eventEmitter.emit('tutorial');
// Emitting 'tutorial' event with numbers as arguments for sum
eventEmitter.emit('tutorial',1,2);

// But how do we create a custom object which takes advantage
// of the events module : we create a class that extends
// from the EventEmitter class
class Person extends EventEmitter{
    constructor(name){
        super(),
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

// So let's create an instance of Person
let paulo = new Person('paulo');
// And we assign a function to the 'name' event
paulo.on('name',()=>{
    console.log('My name is '+paulo.name);
});

// Finally we let the instance of Person emit the 'name'
// event.
paulo.emit('name');

// The emit function is synchronous, it executes one after
// the other.