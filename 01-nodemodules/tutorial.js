// If we want to modularize our Nodejs app
// we can export our functions and variables
// through modules.exports

//--------------------------------------------
// We define a function that sums two numbers
const sum = (num1,num2) => num1 + num2;
//--------------------------------------------
// Then we define a value inside a variable
const PI = 3.14;
//--------------------------------------------
// And finally we create a dummy class
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}

//--------------------------------------------
// Next we use the modules.exports function
// to make our module available for require();
//--------------------------------------------

//--------------------------------------------
// Exporting only one function
// (uncomment this line and comment the others below)
// module.exports = sum;

//--------------------------------------------
// Exporting multiple variables to the module
// (comment the line above and uncomment the three following)
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;


//--------------------------------------------
// Another syntax for multiple exports
module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject};


//********************************************/
// The result can be seen in the app.js of the
// first tutorial folder
//********************************************/