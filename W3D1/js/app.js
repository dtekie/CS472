// //determine what this javascript code will printout 
// //(without running it )
// x=1;
// var a = 5;
// var b = 10;
// var c = function(a,b,c){
//     document.writeln(x);
//     //console.log(x);
//     document.writeln(a);
//     //console.log(a);
//     var f = function (a,b,c){
//         b = a;
//         document.writeln(b);
//         //console.log(b);
//         var b = c;
//         var x = 5;
//     }
//     f(8,9,10);
//     document.write(b);
//     console.log();
//     var x = 10;
// }
// c(8,9,10);
// document.write(b);
// console.log();
// document.writeln(x);
// console.log();

// //#4
// var x = 9;
// function myFunction(){
//     return x * x;
// }
// console.log();
// document.write(myFunction());//81
// x = 5;
// console.log();
// document.write(myFunction());//25
// //5
// var foo = 1;
// function bar(){
//     if (!foo){
//         var foo = 10;
//     }
//     alert(foo);
// }
// //bar();

//#6 consider the following definition of an add() function
//to increment a counter variable:
// const count = {
// add: function(){
//     var counter = 0;
//     return function(){
//         return counter +=1; 
//     }
// },
// reset: function(){
//     var counter = add();
//     return function(){
//         return counter-=1;
//     }
// }
// }
// console.log(count.add())
// console.log(count.reset())

// var x = 10;
// function main(){
// console.log("x1 is:"+ x);//undefined
// x = 20;
// console.log("x2 is:"+x);//20
// if(x>0){
// var x = 30;
// console.log("x3 is:"+x);//30
// }
// console.log("x4 is:"+x);//30
// var x = 40;
// var f= function(x){
// console.log("x5 is:"+x);//50
// };
// f(50);
// console.log("x6 is:"+x);//40
// }
// main();
// console.log("x7 is:"+x);//10

// function foo() { 
//     console.log(this); 
// }

// const bob = {
// log: function() {
// console.log(this);
// }
// };
// console.log(this); // this generally is window object
// foo(); //foo() is called by global window object
// bob.log();//log() is called by the object, bob


// console.log(((a) => a * a)(20));
//#6
const count = (function (){
    let counter = 0;
    const add = function (){
        counter += 1;
        return counter;
    }
    const reset = function(){
        counter = 0;
        return counter;
    }
    return {
        counter: counter,
        add: add,
        reset: reset,
    }
})();
console.log(count.add());
console.log(count.reset());


//#7
/*
In the context of a function closure, a free variable is a variable which is neither declared
in the body of the function nor passed as a parameter. In case of question #6, the free
variable is counter.
*/

//#8
const make_Adder = (function (inc){
    let counter = 0;
    return function (){
        counter += inc;
        return counter;
    }
});
let add5 = make_Adder(5);
add5();
add5();
console.log(add5());

let add7 = make_Adder(7);
add7();
add7();
console.log(add7());

//9
//using Immediately Invoked Function Expression(IIFE) or declaring the variables and 
//functions using let or const and inserting them in a block.
//Example from our lecture slides pp29-module pattern and block scope
(function() {
    var count = 0;
    function incr(n) {
    count += n;
    }
    function reset() {
    count = 0;
    }
    incr(4);
    incr(2);
    console.log("count: " +
    count);
    })();

    //or 
    {
        let count = 0;
        const incr = function(n) {
        count += n;
        }
        const reset = function(n) {
        count = 0;
        }
        incr(4);
        incr(2);
        console.log(count);
        };        

//10-revealing Module pattern
const Employee = (function(){
    let name  = "";
    let age = 0;
    let salary  = 0;

    function setAge(newAge){
        age = newAge;
    }
    function setSalary(newSalary){
        salary = newSalary;
    }

    function setName(newName){
        name = newName;
    }

    function getAge(){
        return age;
    }

    function getSalary(){
        return salary;
    }
    
    function getName(){
        return name;
    }

    function increaseSalary(percentage){
        const increase = (getSalary() * percentage/100);
        salary = salary + increase;
    }
    function incrementAge(){
        getAge() += 1;
    }
    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge,
    }
})();

//11 extending Q#10

Employee.address = {
    street: "",
    city: "",
    state: "",
    zip: "",
}
Employee.setAddress = function(street, city, state, zip){
    this.address = {
        street: street,
        city: city,
        state: state,
        zip: zip,
    }
}
Employee.getAddress = function(){
    return this.address;
}

Employee.setAddress('150 S Main', "Fairfield", "Iowa", 52557)
console.log(Employee.getAddress());

const Employee2 = {
    name: "Daniel",
    address: null,
};

const Employee3 = {
    name: "Bereket",
    address: null,
};
const Employee4 = {
    name: "Mengisteab",
    address: null,
};

//Javascript classes

class User {
    constructor(name = "Anonymous") {
    this.name = name;
    }
    sayHi() {
    console.log(`Hello, ${this.name}!`);
    }}
    fred = new User();
    console.log(fred);
    console.log(fred.__proto__);
    console.log(User.prototype);
    fred.sayHi();
    bob = new User("Bob");
    console.log(bob);
    bob.sayHi();
    
Employee.setAddress.call(Employee2, "101 Main", "Fairfield","IA", 52225);
Employee.setAddress.apply(Employee3, ["Maitemenay - 808", "Asmara","Eritrea", 22222]);
Employee.setAddress.bind(Employee4, "Maitemenay - 809")("Asmara","Eritrea", 11111);


console.log(Employee2.address)
console.log(Employee3.address)
console.log(Employee4.address)