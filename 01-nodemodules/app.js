// The purpose of modules is to separate funcionality
// by modules

//--------------------------------------------
// Here we import our module using require() 
// Note that the path argument is relative
const tutorial = require('./tutorial');

//--------------------------------------------
// Check what this outputs
console.log(tutorial);

//--------------------------------------------
// If you're exporting through modules.export = sum
// You can access the exported function directly
// Try uncommenting this line and line 27
// of tutorial.js (follow the directives in the comments)
//console.log(tutorial(1,2));

//--------------------------------------------
// Finally we can access the exported variables
// through the const defined at the begin. of this file
console.log(tutorial.sum(1,2));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());