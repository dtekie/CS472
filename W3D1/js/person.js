
"use strict"
//1
const person = {
    name: "",
    dateOfBirth: null,
    getName: function (){
        return this.name;
    },
    setName: function (newName){
        this.name = newName;
    },
    toString: function(){
        const output = 
        `The person's name is ${this.getName()}
${this.name} was born on ${this.dateOfBirth}`;
        return output;
    }
}

const person2 = Object.create(person, {
    name:{ value: "John"},
    dateOfBirth:{value: '1998-12-10'}
});
console.log(person2.toString());

//2

const employee = Object.create(person, {
    salary:{
        value: ""
    },
    hireDate: {
        value: new Date(),
    },
    doJob: function(jobTitle){
    console.log(`${this.name} is a  ${jobTitle} who earns $${this.salary}`)
}
});

// employee.salary = 0.00;
// employee.hireDate = new Date();
// employee.title = "";

// employee.doJob = function (jobTitle){
//     console.log(`${this.name} is a  ${jobTitle} who earns $${this.salary}`)
// }

const person3 = Object.create(employee, {
    name: {
        value: "Anna",
        salary: {
            value: 24995.5,
        },
    },
});
person3.doJob("programmer");
console.log(person3.toString());
// console.log(person3.hireDate);
// employee.name = "Anna";
// //e.g. Anna is a Programmer who earns $249,995.50
// employee.salary = 249995.50;
// let output = `${employee.getName()} is a ${employee.doJob("programmer")} who earns $${employee.salary}`;
// console.log(output);
// const x = {};
// const y = {};
// const areEqual = x.__proto__ === y.__proto__;
// console.log(areEqual);
// console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));


function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}
    Person.prototype.toString = function(){
        let output = `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`;
        return output;
    }
const person4 = new Person("Peter", new Date(1985,10,10));
console.log(person4.toString());


