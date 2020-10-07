// passing functions as arguments to other functions
// this differs from what I may be used to: passing arguments to other functions with the purpose of specifying the data that we're working on
// but instead I can pass arguments to specify what is done with the data
// first class functions let us do this!
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

// add(2, 3);
// subtract( 9,3 );
// each function above takes two arguments and either adds or subtracts the two numbers
// but we can instead do this:

const combine2And3 = (func) => func(2, 3);

// in this case 2 and 3 are fixed and we automatically return the result b/c it's an arrow function
// specify what is done with the data by passing in the add and subtract functions
combine2And3(add); // -> 2 + 3 = 5
combine2And3(subtract); // -> 2 - 3 = -1

// we could also pass in JavaScript's various Math functions
combine2And3(Math.max); // -> 3

// as listed above these functions are defined separately before passing them as arguments
// this is good for readability
// but we can also pass anonymous functions
// using the above as an example we could pass an anonymous function as below
combine2And3((x, y) => x + y); // anonymous functions can be more convenient to write when the desired functionality doesn't really require that we name the function
