// Functions that return other functions
// function factories, if you will, or function creators 

const createPrinter = () => () => console.log('Hello!'); 

// the longhand, ES5 version would look like this 

const createPrinter = function() {
    return function() {
        console.log('Hello');
    }
 }

//  const double = x => x * 2;
//  const triple = x => x * 3;
//  const quadruple = x => x * 4;
// this is very repetitive code so I can refactor it for more repetitive use! 
// first class functions allow this 

const createMultiplier = y => x => x * y; 

const double = x => createMultiplier(2);
const triple = x => createMultiplier(3);
const quadruple = x => createMultiplier(4);
double(3); 
// the functions can be called to return the same thing as the original versions 
