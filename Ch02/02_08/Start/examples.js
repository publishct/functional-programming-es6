// Higher-Order functions 
// this is what we call function factories officially
// a higher-order function takes function(s) as argument or returns function(s)
// these allow for amazing reusability 
// we'll solve the problem of checking arguments with a higher-order function
// for example we could check that our arguments are the right type, a number is positive, or that two arrays have the same number of elements
// lets right a function that divides one argument by another 

// const divide = ( x, y) => x / y; 
// // we want to prevent the second argument from being zero 

// const divide = ( x, y) => {
//    if ( y === 0 ) {
//        console.log('Error, dividing by zero');
//        return null; // prevents the function from returning NaN when 2nd argument is zero
//    }

//     return x / y; 
// }; 
// remember the single responsibility principle which says a single piece of code should have 1 responsibility 
// our divide function is all cluttered and not following SRP 
// if a single piece of code requires you to do more than one thing, it's a sign that code should be refactored 
// as below with a higher order function 

const divide = ( x, y ) => x / y; // follows SRP 

const secondArgumentIsntZero = func => 
 (...args) => { // spread operator 
    if ( args[1] === 0 ) { // instead of checking y, make sure the second argument with an index of 1 is NOT zero
        console.log('Error, dividing by zero');
        return null; 
    }
    return func(...args);
 }
// use the function by defining a new function 
const divideSafe = secondArgumentIsntZero(divide);
console.log(divideSafe( 7, 0 ));
// run it and we get our correctly logged error
// and the divide function and secondArgumentIsntZero both follow SRP 
// and if we run divideSafe with arguments that will pass, we get the correct result 
