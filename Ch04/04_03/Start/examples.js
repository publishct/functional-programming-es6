// Recursions behave like for loops without using them 

const countDown = x => {
    if ( x < 0) return;    // stop conditions are ALWAYS needed 
    console.log(x);
    countDown( x -1 );
}
countDown(10);
// the result is a countdown in the console from 10 to 0, without using a for loop 
// what about counting up instead? 

const countUp = ( x, max ) => {
    if ( x > max) return;    // stop conditions are ALWAYS needed 
    console.log(x);
    countUp( x + 1, max );
}
countUp( x, 10 );

// running the code prints the numbers 0 to 10 counting up, without a for loop 
