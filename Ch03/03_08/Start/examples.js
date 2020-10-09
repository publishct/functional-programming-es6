// Reduce is an extremely useful built-in function for arrays 
// we can take an array of data and reduce it down to a sum or an average 
// Reduce takes a function with two arguments in its simplest form but format is a bit different than map and filter

// myArrayMine.reduce(( acc,element ) => { 
//     // ...
//     // return ...
// });
// acc: the accumulator variable - the current value we've built up over the original value 
// element: the current element of the array that we're looking at 



// Remember***
// We have to remember that in addition to the function that we pass a Reducer as an argument, we have to provide another argument
// the starting value, the value that Reduce will start with when looking at elements in the array 
// so when Reduce is called for the very first time the accumulator argument will be equal to the starting value and the second argument will be equal to the first element in our array 


// const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];
// const sum = numbers.reduce(( acc, x) => {
//     console.log(`acc is ${acc}`);
//     console.log(`x is ${x}`);

//     return acc + x;
// }, 0 );

// console.log(sum);
// what we get when we run this with Cli: npx babel-node /var/www/functional-programming-es6/Ch03/03_08/Start/examples.js
// acc is 0
// x is 5
// acc is 5
// x is 7
// acc is 12
// x is 2
// acc is 14
// x is 40
// acc is 54
// x is 23
// acc is 77
// x is 14
// acc is 91
// x is 8
// acc is 99
// x is 4
// acc is 103
// x is 11
// 114 


// What if we want to use Reduce to calculate the product in our array 
// the starting value would be 1, instead of 0 (multiplying by zero always gives a zero in return)

const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];
const sum = numbers.reduce(( acc, x) => {
    console.log(`acc is ${acc}`);
    console.log(`x is ${x}`);

    return acc * x;
}, 1 );

console.log(sum);

// // running our code results in a correct print to the console log as shown below 
// acc is 1
// x is 5
// acc is 5
// x is 7
// acc is 35
// x is 2
// acc is 70
// x is 40
// acc is 2800
// x is 23
// acc is 64400
// x is 14
// acc is 901600
// x is 8
// acc is 7212800
// x is 4
// acc is 28851200
// x is 11
// 317363200