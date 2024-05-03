"use strict";
// -----------------------JS --------------------------/
// 1. High Level -> any comp. prog. needs memory resource, Low level languages like in C we spceifically needs to manually asking the computer to allocate memory, but in High Level languages like C++, Java, JS, Python where we do not have to take care of memory allocation and it will automatically do it .But Therefore programs will never be fast and optimized as C programs.

// 2. Garbage Collector -> Algorithm inside JS Engine which automatically removes all unsued objects from the computer memory, in order not to clog it up with the neccessary stuff. It's like having a cleaning guy who cleans the program time to time and we don't have to worry about that

// 3.Interpreted or Just in Time compiled language

// 4. Mutli Paradigm- An apprach and minset of structuring code, which will direct your coding style and technique
//      i. Procedural programming
//      ii. OOPs
//      iii.Functional Programming

// 5. First Class Functions -> functions are treated as variables, we can pass them into other functions and return them from functions.

// 6. Dynamic Language -> In JS we don't assign data types to variables, instead they only become known when JS executes our code. Out type of variable can be change when we change the code.

// ** Imp. 7. Single Threaded, Non blocking event loop ->
// i.Concurrency Model -> Js handles multiple tasks happening at the same time
// ii. JS runs in one Single thread, so it can only do one thing at a time
// iii. So what about like it would block the single thread. However we want non-blocking behaviuour
// iv. therefore JS has Event Loop. Event loop takes long runnig tasks, executes them in the background and puts them back in the main thread once they are finished.

//  ------------- JS Engine and Runtime -----------------/
// JS Engine ->  JIT(Just in Time) Compilation -> Call Stack + Heap memory makes up the JS Engine

//  ----------- JS execution in Call Stack --------/
//  Execution Context -> Environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed. There is only one global EC(Execution context ).
//  Each function gets it's own execution context as soon as it is called.
//  ---------- Scope and Scope chain ---/
//  let and const are block scoped and variables defined as var end up int the closestf function scoped

//  ----- Scope chain Vs. Call Stack
/*

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age} born in ${birthYear}`;
    console.log("output = " + output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //   creating new variable with same name as outer scope's variable
      const firstName = "Steven";

      //   Reassigning outer scope's variable
      output = "New Output!!";

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Jonas";
calcAge(1991);
// console.log(age);
// printAge();

// ----------------------  Hoisting in JS ----------/

// Hoisting -> It makes some types of variables accessible/ usable in the code before they are actually declared.

// Temporal dead zone(TDZ) , let and const

// Hoisting Variables
/*console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Hoisting Functions

console.log(addDecl(2, 3));
// console.log(addExpr(5, 6));
// console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All Products deleted !");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// --------- This keyword ----------- /
// console.log(this);

const calcAge1 = function (birthYear) {
  console.log(2020 - birthYear);
  //   console.log(this);
};
calcAge1(1998);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this); //  Arrow function does have it's own this keyword
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,

  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // method borrowing -> copying 1 method to another object
matilda.calcAge();

const f = jonas.calcAge;
f();


const jonas = {
  year: 1991,
  firstName: "Jonas",

  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    const isMillenial = () => {
      // arrow functions inherits the this keyword from parent
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      //   console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`), //
};

jonas.greet();

jonas.calcAge();

const addExprconst = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExprconst(2, 5);
addExprconst(2, 4, 5, 6);
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};


//  Primitive vs Objects (Primitive vs reference types)

let age = 30;
let oldAge = age;
age = 31;
console.log(`Current age = ${age}`);
console.log(`old age = ${oldAge}`);

const me = {
  name: "jonas",
  age: 30,
};

const friend = me;
friend.age = 23;

console.log(`Freind = `, friend);
console.log(`me = `, me);
*/
// Primitive types

let lastName = "Wiilliams";
let oldLastName = lastName;
lastName = "Davis";
console.log(`LastName = `, lastName);
console.log(`Old LastName = `, oldLastName);


// Reference Types
const jessica = {
  firstName: "Jessice",
  lastName: "Williams",
  age: 27,
};

const marriedJessice = jessica;
marriedJessice.lastName = "Davis";
// console.log(`Before Marriage : `, jessica);
// console.log(`After Marriage : `, marriedJessice);

// marriedJessice = {};

// Copying Objects
const jessica2 = {
  firstName: "Jessice",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Pop"],
};
const jessicaCopy = Object.assign({}, jessica2); // it will create a shallow copy
jessicaCopy.lastName = "Davies";

jessicaCopy.family.push("David");
jessicaCopy.family.push("Alex");

console.log(`Before Marriage : `, jessica2);
console.log(`After Marriage : `, jessicaCopy);

