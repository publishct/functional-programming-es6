const createPrinter = () => {
    const myFavoriteNumber = 42;

    return() => 
        console.log(`My favorite number is ${myFavoriteNumber}`);

}

const printer = createPrinter();
printer();

// Closures allow us to return a function that still has scope from the function it was returned from 
// we are not able to call myFavoriteNumber outside the function 
// but we ~can~ with the closure 
