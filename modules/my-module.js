//not supported by node.
//
//export function sum(x, y) {
//    return x + y
//}
//
//export const PI = 3.141593;

// The module object has a special property, called exports, which is responsible for defining what
// a module makes available for other modules to use. In Node.js terminology, module.exports
// defines the values that the module exports. Remember that "exporting" is simply making objects 
// or values available for other modules to import and use. Therefore, we can export any value or 
// function or other object we would like to export by attaching it as a property of 
// the module.exports object.

console.log("module.filename: " + module.filename);  
console.log("module.id: " + module.id);  
console.log("module.exports: " + module.exports);  
console.log(module.exports);  
console.log(exports);  

// Works if the 'exports' object is not replaced, as on line 37. 
//exports.sum = (x, y) => {
//    return x + y;
//};
//
//exports.PI = 3.141593;

function func1() {
    console.log("func1");
}

function func2() {
    console.log("func2");
}

module.exports = {func1, func2};
