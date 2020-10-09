// Filtering 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter is a built in function that's used to find all elements in an array that fits some kind of criteria 
// syntax is similar to map, but in filter we pass a function that returns either true or false for each element (true means that element is included in the array according to specifications)
// the procedural/ non-functional way of doing this would be a for loop, as one example 
// in functional programming, using filter to find even numbers in an array might look like this 

// const isEven = x => x % 2 === 0;

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// this is what we get in return: [ 2, 4, 6, 8, 10 ]
// and we didn't even need to define isEven as a separate function before being passed to filter, which would look like this 
// as below 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter( x => x % 2 === 0 );
// console.log(evenNumbers);
// we get the same result as before 


// and with a new array, an array of words; 
// const words = [
//     'hello',
//     'goodbye',
//     'the',
//     'Antarctica',
// ]
// const wordsLongerThanFiveLetters = word => word.length > 5;
// const longWords = words.filter(wordsLongerThanFiveLetters);
// console.log(longWords);

// but we can take previous knowledge to write the above with a higher order function that uses minimal code 
// const words = [
//     'hello',
//     'goodbye',
//     'the',
//     'Antarctica',
// ]

// const createLengthTest = minLength => 
//     word => word.length > minLength;
// const wordsLongerThanFiveLetters = createLengthTest(5);
// const longWords = words.filter(wordsLongerThanFiveLetters);
// OR 

const words = [
    'hello',
    'goodbye',
    'the',
    'Antarctica',
]

const createLengthTest = minLength => 
    word => word.length > minLength;
const longWords = words.filter(createLengthTest(5));
console.log(longWords);
// we return the same results as before and have written highly functional code 

