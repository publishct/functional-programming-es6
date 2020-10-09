// Programmers typically implement private variables in JS with an underscore in front of the class name 
// but they'll ignore the class keyword privacy indication when convenient 
// another way to declare a private variable is to define as a function that returns a new object
// start as below
// const Person = ({ name, age, job }) => {
//     var _name = name;
//     var _age = age;
//     var _job = job;
//     return { };
// }

// then use closure to make _name,_age,_job only available through getters and setters 
// write the getter function for person's name & define the getter inside the object 
// then before doing the rest just see how far this gets me by printing to the console - and I get Cynthia! the name is correctly printed
// and the getName function is the only way we can access the variable 
// me._name; would result in an undefined output 
// this is the most important thing to remember about declaring private variables with closures 

// const Person = ({ name, age, job }) => {
//     var _name = name;
//     var _age = age;
//     var _job = job;
//     return { 
//         getName: () => _name,
//     };
// }
// const me = Person({ name: 'Cynthia', age: 24, job: 'developer' });
// console.log(me.getName());

// const Person = ({ name, age, job }) => {
//     var _name = name;
//     var _age = age;
//     var _job = job;
//     return { 
//         getName: () => _name,
//         getAge: () => _age, 
//         getJob: () => _job,
//         setJob: newJob => _job = newJob,
//     };
// }

// set the rest of the getters as above 
// then I can use them the same way I used getName before 
// also set the setter for job and see what this looks like 
// const me = Person({ name: 'Cynthia', age: 24, job: 'developer' });
// console.log(me.getJob()); // we have access to the job variable through closure! 
// // then call the new setJob with a new value 
// me.setJob('Senior Developer');
// // print the value 
// console.log(me.getJob()); // we get the updated value 
// and these functions are the ONLY ways to access the variables, thanks to closure 
// as an exercise write the setAge setter for the Person object

const Person = ({ name, age, job }) => {
    var _name = name;
    var _age = age;
    var _job = job;

    return { 
        getName: () => _name,
        getAge: () => _age, 
        getJob: () => _job,

        setJob: newJob => _job = newJob,
        setAge: newAge => _age = newAge,
    };
}

const me = Person({ name: 'Cynthia', age: 24, job: 'developer' });
console.log(me.getAge());
me.setAge(25); 
console.log(me.getAge());


