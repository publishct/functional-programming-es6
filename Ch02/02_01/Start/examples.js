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

const add = (arg1, arg2) => arg1 + arg2;
