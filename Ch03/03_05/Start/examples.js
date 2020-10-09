// Built in Every and Some functions 
// similar to filter in that we pass them a function that returns either true or false for each element 
// difference is that instead of returning an array, every and some return a single boolean value, either true or false 
// Every: returns true (if and only if) every single element is true in a given array, otherwise every returns false 
// Some: returns true if the condition is true for any one or more elements in the array - so it returns false only if every element in the array is not true 
// so in comparison every and some have some overlap: they'll return the same value on an array where the condition is true for all the elements or false for all the elements 
// there is no built-in 'none' function in javascript to test for when a condition isn't true for any of the elements in the array 
// but we can get this same functionality using the ! not operator with the some function 

// const employees = [{
//     name: 'Jane Doe',
//     salary: 90000,
// }, {
//     name: 'Donald Jones',
//     salary: 65000,
// }, {
//     name: 'Donna Appleseed',
//     salary: 1500000,
// }, {
//     name: 'John Smith',
//     salary: 250000,
// }];

// // we want to find out if any of our employees make more than a million dollars 

// const makesMoreThanOneMillion = employee => 
//     employee.salary > 1000000;
// const result = employees.some(makesMoreThanOneMillion);
// console.log(result); 
// we get the result true because Donna does make more than one million 
// below is an example of how Every might be used 

const formValues = [
    'Shaun',
    'Wassell',
    'Maine',
    '',
]

// how do we make sure the user has filled in all of the forms? 

const isNotEmpty = string => !!string; // falsey value 

const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled);
