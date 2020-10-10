// const map = (arr, func) => {
    
// }

// // testing if it works:

// // Should be [2, 4, 6]
// console.log(map([1, 2, 3], x => x * 2));

// // Should be [-5, -6, -7, -8, -9, -10]
// console.log(map([5, 6, 7, 8, 9, 10], x => -x));

// // Should be ['A', 'B', 'C', 'D']
// console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase()));


// procedural for-loop way for 
// Should be [2, 4, 6]
// console.log(map([1, 2, 3], x => x * 2));
// const numbers = [ 1, 2, 3];
// const doubledNumbers = [];

// for ( let i = 0; i < numbers.length; i++ ) {
//     doubledNumbers.push( numbers[i] * 2);

// }
// console.log(doubledNumbers); 
// and we get the result, but it's not in a functional way b/c we're worried about HOW to get the result


// functional programming, map function way
const map = (arr, func) => {
    let newArray = [];
    for ( let i = 0; i < arr.length; i++ ) {
    const result = func(arr[i]);
    newArray.push(result);
    }
    return newArray;
}
console.log(map([1, 2, 3], x => x * 2));

console.log(map([5, 6, 7, 8, 9, 10], x => -x));

console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase()));