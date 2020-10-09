// The Slice Function 
// Slice is different from other built-in functions because it isn't a higher order function 
// meaning: slice doesn't take functions as arguments 
// but it's still important for working for arrays
// functions that mutate the original array: sort, reverse, pop, push -- all of these are original array mutators 
// we cannot use them directly but we can do a simple workaround to turn mutating functions into non mutating functions 
// Slice allows this workaround 
// Slice is normally in procedural/ OOP used to get a segment of the array 
// slice doesn't mutate, it only returns a copy 
// take a slice that starts at the beginning and returns the whole array for the workaround 
// slice called without arguments does this! It's default is to start at the beginning and include the whole array 
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers.slice()); // provides a copy of the original array for use with mutating built-in functions


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.slice().reverse()); // provides a reversed copy 
console.log(numbers); // proof that original array was not mutated 
