const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const triple = (x) => x * 3;
const add5 = (x) => x + 5;

// functions in ES6 are first class, so we can also create an array of functions just like we can for objects
// we might need an array of functions for applying multiple functions at once to a number
// the array with functions defined in it would look like:

const functionsArray = [double, subtractOne, triple, add5, Math.sqrt];

// notice there are no parenthesis after the functions as listed in the array functionsArray
// this is because we are not referring to the results of calling the function
// rather we are referring to the function itself so we don't add the parenthesis (we just use the function names in this case)
// we will now use a bit of procedural code (not very functional, involves mutation) to explain a point with the functionsArray
// 1) first assign the number we want to work with to a variable
var number = 42;
// use for/ each to loop through each function in the array and apply it to the variable

functionsArray.forEach((func) => (number = func(number)));

// print the result before running the program

console.log(number);
