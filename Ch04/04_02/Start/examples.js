// partial application is when we take a function with some number of arguments and we fix some of those arguments to a set value
// the shortened and fixed arguments can then be called anywhere in the code 
// if there's a function we use often in our code where one or more of the arguments we call it with is always the same, then this is a good use for partial application

// const add = ( x, y, z) => x + y + z; 

// const addPartial = x => 
//     ( y,z ) => add( x, y, z );

// const add5 = addPartial(5); // the 5 gets fixed to x 

// const sum = add5( 6,7 );
// console.log(sum);
// we get the sum of all three numbers as if we called add to begin with 
// partial application lets us pass arguments in at different times in different parts of the code
// we can apply our arguments however we want 
// another example below 

// const add = ( x, y, z) => x + y + z; 

// const addPartial = ( x, y ) => 
//     z => add( x, y, z );

// const add5and6 = addPartial( 5, 6 ); 

// const sum = add5and6( 7 );
// console.log(sum);

// we could go in a step further and call all arguments one-by-one if we wanted 
// const add = ( x, y, z) => x + y + z; 

// const addPartial = x => 
//     y => 
//     z => add( x, y, z );

// const add5 = addPartial(5);
// const add5and6 = add5(6);
// const sum = add5and6(7);
// console.log(sum);
// all these give the same result in the console log 
// passing in arguments one at a time is called CURRYING 
// we could also refactor as below 
const add = ( x, y, z) => x + y + z; 

const addPartial = x => 
    y => 
    z => add( x, y, z );

const sum = addPartial(5)(6)(7);
console.log(sum);
// this also results in the same console log reply
// 18


