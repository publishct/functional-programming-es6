// Prior to ES6 there were two main ways of writing functions
// they are shown below

function myFunction(arg1, arg2) {
  // function body
}

// OR

const myOtherFunction = function (arg1, arg2) {
  // function body
};

// With ES6 we can let go of the word function all together with an arrow function as below

const add = (arg1, arg2) => {
  const sum = arg1 + arg2;
  return sum;
};

// But we can go even simpler in ES6 with arrow functions
// shown below

const add = (arg1, arg2) => {
  return arg1 + arg2;
};

// And it can get even simpler
// when the only statement in a function is its return statement
// we can drop brackets and the return keyword
// as below
// this is a way of reducing clutter for regular functions

const add = (arg1, arg2) => arg1 + arg2;

// arrow functions also reduce clutter for functions defined with only one argument
// we are able to remove the parenthesis around the 1 argument (my ESLint forces parenthesis though)

const double = (number) => number * 2;

// the same function above would be written in ES5 syntax as:

const double = function (number) {
  return number * 2;
};

// as for an arrow function with no arguments:
const sayHello = () => console.log("Hello");

// as for an arrow function that returns an objects we need to wrap the function properties in parenthesis
const getPersonData = () => ({
  // define object properties
  name: "John",
  age: 34,
  job: "programmer",
});
