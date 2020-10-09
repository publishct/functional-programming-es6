// Combining functions by Chaining arrays (of functions)
// we can combine functions like map, filter and reduce 

// we have employee data again
// we want to calculate how the average salary of developers in our data set compares with the average salary of the other employees in our data set
// 

const employees = [{
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
}, {
    name: 'Karen Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
}, {
    name: 'Daryl Cline',
    age: 25,
    jobTitle: 'secretary',
    salary: 54000,
}, {
    name: 'Abbey Garcia',
    age: 40,
    jobTitle: 'developer',
    salary: 100000,
}, {
    name: 'Finn Smith',
    age: 29,
    jobTitle: 'engineer',
    salary: 40000,
}, {
    name: 'Eve Wordsworth',
    age: 20,
    jobTitle: 'developer',
    salary: 65000,
}, {
    name: 'Ronald Jacobs',
    age: 60,
    jobTitle: 'developer',
    salary: 90000,
}];

// first use filter to separate devs and non-devs 

const developers = employees.filter(employee => 
    employee.jobTitle === 'developer');
// console.log(developers); // prints list of developers from dataset
// then we need to use map to transform our array of developer objects into an array of only their salary attributes

const developerSalaries = developers.map( developer => developer.salary )

const totalDeveloperSalaries = developerSalaries.reduce(( acc, x) => acc + x, 0)
const averageDeveloperSalary = totalDeveloperSalaries / developerSalaries.length; 
console.log(averageDeveloperSalary);
// we get the avg salary of all developers in original array 
// now we need to do the same for non-developers 

const nonDevelopers = employees.filter(employee => 
    employee.jobTitle !== 'developer');

const nonDeveloperSalaries = nonDevelopers.map( nonDev => nonDev.salary );
const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce(( acc, x ) => acc + x, 0) 
const averageNonDeveloperSalary = totalNonDeveloperSalaries / nonDeveloperSalaries.length;
console.log(averageNonDeveloperSalary);
// we get the below results: 
// 81250
// 56333.333333333336

// combining JS' built-in array functions makes it much easier to get useful metrics 

