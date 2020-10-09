// Sort and examples of it 

// take employees at the company and sort by years at the company; sort names in a list by ascending alphabetical 
// Sort is definitely a mutating built in fuction 
// So to keep the knowledge from last chapter on slice we will append our sort function with slice 
// to keep from mutating the data with sort
// sort is similar to map, every, filter, and some in that it takes an argument 
// but unlike the others, sort gets passed the comparitor function, which has two arguments, not 1. 
// the arguments in the comparitor are a grey area because they affect how the array is returned 



// const sortedNumbers = numbers.slice().sort(( a,b ) => {
//     return -1; // a should come before b in the final array 

//     return 1; // b should  come before a in the final array 

//     return 0; // leave the elements in whatever order we found them (technically speaking the numbers ARE THE SAME)
// });

// const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

// const ascending = ( a, b) => {
//     if ( a < b ) return -1;
//     if ( a > b ) return 1; 
//     return 0;
// }
// const sortedNumbers = mixedUpNumbers.slice().sort(ascending);
// console.log(sortedNumbers);

// it works and we get this in the console 
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// what if we wanted to sort in descending order?
// Just copy/paste, rename, and switch the greater than and less than signs, as below 
const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

const descending = ( a, b) => {
    if ( a > b ) return -1;
    if ( a < b ) return 1; 
    return 0;
}
const sortedNumbers = mixedUpNumbers.slice().sort(descending);
console.log(sortedNumbers);
// it works perfectly! reusable functional code 
// because the exact implementations of slice behind the scenes in the browsers doesn't really matter to us 





