/**
 * lab9.js
 *
 */

"use strict";

// 1

const person = {
  name: "",
  dateOfBirth: "",
  getName: function () {
    return this.name;
  },
  setName: function (newName) {
    this.name = newName;
  },
};

const person2 = Object.create(person, {
  name: {
    value: "John",
  },
  dateOfBirth: {
    value: "1998-12-10",
  },
});
document.writeln(
  `The person’s name is ${person2.getName()}\n${person2.getName()} was born on ${
    person2.dateOfBirth
  }`
);

// 2
const employee = Object.create(person, {
  salary: {
    value: 0,
  },
  hireDate: {
    value: new Date(),
  },
});

employee.doJob = function (jobTitle) {
  document.writeln(`${this.name} is a ${jobTitle} who earns $${this.salary}`);
};

const person3 = Object.create(employee, {
  name: {
    value: "Anna",
  },
  salary: {
    value: 249995.5,
  },
});

person3.doJob("Programmer");
// 3

function Person(name, dateOfBirth) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
  this.setName = function(newName) {
    this.name = newName;
  }
  this.getName = function() {
    return this.name;
  }
  this.toString = function() {
    return `{Name: ${this.name}, Date of Birth: ${this.dateOfBirth}}`;
  }
}
const person4 = new Person("Peter", new Date(1985, 10, 10));
document.writeln(person4.toString());


