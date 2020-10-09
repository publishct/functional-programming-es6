// map is one of JavaScripts built in arrays 
// map is called on the array, and then we pass it some function that we want it to do to each element of the array 
// map then contains the return value array that contains each element of the results of applying the function to the elements of the original array 
// it takes each element and maps it to the return value of the function we pass

// note that map doesn't change the original array, it just returns a modified copy 
// the reverse function DOES modify the original array (not a modified copy, the original data is mutated)
// I can use ESLint to warn me about unwanted mutation 

const numbers = [1, 2, 3, 4, 5];
// functional programming allows us to focus on what it is we want instead of how to compute the result 
const double = x => x * 2;
const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);
// the above is highly readable and reusable code and we are not even worrying about indexing or the length of our array, we are focused on what we want instead of how we're going to get it 




