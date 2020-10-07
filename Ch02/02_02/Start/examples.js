// Functions as data

// const sayHello = () => console.log("Hello!");
// const sayHello2 = sayHello;
// sayHello2(); // this line calls the sayHello2 function

// we could also add an argument to the sayHello function and the sayHello2 function
const sayHello = (name) => console.log("Hello!" + name);
const sayHello2 = sayHello;
sayHello2("Cynthia"); // this line calls the sayHello2 function

// so remember that when we define arrow functions in ES6 syntax, we use the const keyword
// this is also true for defining other types like numbers, strings, and objects
// these other types (numbers, strings, etc.) also have new ways of being assigned in ES6
// Turnary operators are one way of dynamically changing a function's definition

const myFunction = true
  ? () => console.log("First option")
  : () => console.log("Second option");
// time intensive code can be defined with a mocked out version that uses fake data
// turnary operators are useful for this

const DEVELOPMENT = true;
const fetchDataReal = () => {
  // time-intensive operations would take place here
};
// then define another function to mock out the data we expect to get from our server
const fetchDataFake = () => ({
  name: "John Doe",
  age: 34,
});
// then we define the function used elsewhere in the app with a turnary operator to decide what data/function definition will be used at run time (real or fake)
const fetchData = DEVELOPMENT
  ? fetchDataFake // for dev building
  : fetchDataReal; // if we were serving up a production mode
