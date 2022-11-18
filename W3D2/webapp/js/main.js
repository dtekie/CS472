/**
 * main.js
 */
"use-strict"

import { Person} from './model/person.js';
import { Emplyee } from './model/employee.js';

const Ana =  new Person("Ana Smith",new Date());
Ana.setDateOfBirth(new Date(1998, 11, 15));

const Bob =  new Person("Bob Jone",new Date());
Bob.setDateOfBirth(new Date(1945, 10, 16));

const Carlos =  new Person("Carlos Slim Helu",new Date());
Carlos.setDateOfBirth(new Date(1976, 8, 24));

const persons = [Ana, Bob, Carlos];
for (let person of persons){
    console.log(person.toString())
}

const jim = new Emplyee('Jim Hanson', new Date(1998, 10, 12), 245999.0);
jim.doJob("Software Engeener");

console.log(jim.toString());
