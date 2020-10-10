// Functions as objects 
// functions have properties like objects do, like the name property based on what we named the function 
// the name property can be called to return a function's name 
// the length property can be called to return how many arguments a function takes 
// some properties themselves are functions, such as every function's toString property, which will print a string representation of our function 
// call, apply, and bind are three other properties as functions of importance 

const add = ( x, y, z ) => 
    x + y + z; 


// console.log(add.call( null, 1, 2, 3 ));
// 'call' in this case calls our add function with the arguments 1, 2, and 3. Sometimes I may see 'this' instead of null, but functional programming does not really use 'this' very often 

// 'apply' is similar to call but instead we apply an array 

// console.log(add.apply( null, [1, 2, 3 ]));
// we get the same result as before 

// but in reality I will probably use apply and call very infrequently 
// ES6 allows for the following instead with the spread operator: 

const args = [ 1, 2, 3];
// console.log(add(...args));

// 'bind' is another 
const add1 = add.bind( null, 1)
console.log(add1( 2, 3 )); 
// we still get the same result 

