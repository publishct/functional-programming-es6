// const person = {
//     name: 'Jimmy Smith',
//     age: 40,
//     hairColor: 'brown',
//     eyeColor: 'blue',
// };

// const careerData = {
//     title: 'developer',
//     company: 'ABC Software',
// };

// the spread object is really useful for JS objects and arrays 
// what if we wanted to combine the two objects above into one object with all of the same properties and values?
// use the spread operator instead of looping through one and setting them on the other 

// const personWithCareerData = {
//     ...person,
//     ...careerData,
// }

// console.log(personWithCareerData); // and we get all of the combined, same properties and values from both of the other objects 
// what if we didn't need to combine all of the properties? As below 

// const personWithCareerData = {
//     name: person.name,
//     ...careerData,
// }

// console.log(personWithCareerData); // we get what we wanted upon run, the new object only has name, company, and title properties 
// what if both person and careerData have a name property? whichever comes last overwrites those that came before

// const person = {
//     name: 'Jimmy Smith',
//     age: 40,
//     hairColor: 'brown',
//     eyeColor: 'blue',
// };

// const careerData = {
//     name: 'Johnathan Smith',
//     title: 'developer',
//     company: 'ABC Software',
// };

// const personWithCareerData = {
//     ...person,
//     ...careerData,
// }

// console.log(personWithCareerData); 
// running this lets us see the name from careerData overwrites the name from person data 
// const person = {
//     name: 'Jimmy Smith',
//     age: 40,
//     hairColor: 'brown',
//     eyeColor: 'blue',
// };

// const careerData = {
//     name: 'Johnathan Smith',
//     title: 'developer',
//     company: 'ABC Software',
// };
// const updates = {
//     name: 'Johnathan Mitch Smith'
// }
// const updatedPerson = {
//     ...person,
//     ...updates,
// }
// console.log(updatedPerson); 
// the spread operator can be used with objects as above and arrays as below 

// const numbers = [1, 2, 3, 4, 5]; // instead of calling push (which mutates), we can use the spread operator 
// // don't do as below (it mutates)
// // numbers.push(6);
// const newNumbers = [
//     ... numbers,
//     6, // the new element we want to add 
// ]
// console.log(newNumbers); // the new array contains all of the original numbers and the added 6
// we can use spread to add numbers to the beginning of the array as well 
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [
    0,
    ... numbers,
    6, 
]
console.log(newNumbers);
// we get: [ 0, 1, 2, 3, 4, 5, 6 ]


