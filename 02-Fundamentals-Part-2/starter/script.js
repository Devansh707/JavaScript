'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive.');

// const interface = 'Audio';
const private = 12;


// ----- Functions ------/
function logger() {
    console.log('My name is Devansh Srivastava');
}

// Calling  /  Running // Invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
console.log(fruitProcessor(10, 20));
const mixJuice = fruitProcessor(5, 10);
console.log(`mixJuice = ${mixJuice}`);


// function declaration -> we can call them even before they are define
const age3 = calcAge1(2000);
console.log(age3);
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);

//  ------ function expression -> we can not call them before defining them
// const age4 = calcAge2(20001); // we cannot do this / error
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}


// ----- Arrow Functions ->
const calcAge3 = birthYear => 2037 - birthYear; //  we don't have to write explicitly return statement
const age2 = calcAge3(1995);
console.log(age2);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(1996, 'David'));


function cutFruitPieces(fruit) {
    return fruit * 5;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;

    } else {
        return `${firstName} already retired ${retirement * -1} years ago.`
    }
}
console.log(yearsUntilRetirement(1991, "David"));
console.log(yearsUntilRetirement(1970, "Maradona"));


// --------- Arrays -----//
//  We can mutate/change array values even though they are declared const. Because JS stores value in memory

const freind1 = "Michael";
const freind2 = "Steven";
const freind3 = "Peter";

const freinds = ["Michael", "Steven", "Peter"];
console.log(freinds);

const y = new Array(1991, 1984, 2008, 2022);
const days = new Array(4);
console.log(days.length);

console.log(freinds[0]);

const months = new Array("jan", "feb", "match");
console.log(months);

freinds[2] = "Jay"; // we can change const array values
console.log(freinds);
// freinds = ["bob", "Alice"]; //  we cannot change whole array;

const firstName = "Devansh";
const jon = [firstName, "Srivastava", 2020 - 2000,  "Software Enginerr", freinds];
console.log(jon);
console.log(jon.length);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [2020, 2019, 2018, 2015];

// calcalcAge(years);  -> Error - NaN

const a1 = calcAge(years[0]);
const a2 = calcAge(years[1]);
const a3 = calcAge(years[years.length - 1]);
console.log(a1, a2, a3);

const ages = [calcAge(years[0]), calcAge([years[1]]), calcAge([years.length - 1])];
console.log(ages)



//  ------ Array Methods/ Operations -----/

// Add Elements :

// Push method = It will add the new element to last and returns the length of the new array;
const freinds = ["Michael", "Steven", "Peter"];
const newLen = freinds.push("Jason");
console.log(freinds);
console.log(`New Length = ${newLen}`);

// Unshift method = It will add the element to first place and returns the length of the new array
freinds.unshift("Joy");

// Remove Elements:

// Pop Method :  Removes the last element of the array and returns the popped/removed value
const poppedValue = freinds.pop();
console.log(freinds);
console.log(`Popped/Removed Element = ${poppedValue}`);

// Shift Method : It will remove/delete first element of the array and returns the popped/removed value
const firstELem = freinds.shift();
console.log(freinds);
console.log(`Popped/Removed Element = ${firstELem}`);

// Other Methods :

// indexOf method :
console.log(freinds.indexOf("Steven"));
console.log(freinds.indexOf("Bob"));  // it will return -1

// Include Method : It will return true/false whether the element is present or not in the array.
console.log(freinds.includes("Steven"));
console.log(freinds.includes("Bob"));
freinds.push(23);
console.log(freinds.includes(23));

const harry = "Harry";
freinds.push(harry);
if(freinds.includes(harry)){
    console.log(`You have freind called ${harry}`);
}

 //  Assignment
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip2(bills[1]), calcTip2(bills[2])];
console.log(`Bills = ${bills}`);
console.log(`Tips = ${tips}`);



//  ------ Introduction Of Objects ----/

// Difference between Arrays and Objects is that in Arrays we access data in the order . But in Objects order is not important for accessing the data.

const jonArrays = [
    "Jon",
    "Bill",
    2020 - 1991,
    ["Mike", "Phil", "Tyson"]
];

const jonObjects = {
    firstName: "Jon",
    lastName: "Bill",
    age: 2020 - 1991,
    freinds: ["Mike", "Phil", "Tyson"],
    job: "Software Engineer"
};
console.log(jonObjects);

//  Change and Retrieve Data from the Objects
console.log(`LastName = ${jonObjects.lastName} and Age = ${jonObjects.age}`);

const Name = "Name";
console.log(`First Name = ${jonObjects["first" + Name]}`);
console.log(`Last Name = ${jonObjects["last" + Name]}`);

const interestedIn = prompt("What do you want to Know ? firstName, lastname, age,  job?");

console.log(interestedIn);

if (jonObjects[interestedIn]) {
    console.log(jonObjects[interestedIn]);
} else {
    console.log("Wrong request !");
}

// Adding Property to objects
jonObjects.location = "Paris";
jonObjects["country"] = "France";
console.log(jonObjects);

//  Challenge =>  Jon has 3 freinds and fetch the the best freind Mike

const bestFreind = jonObjects.freinds;
console.log("BestFreind = " + bestFreind[0]);


//  ----------- Object Methods -----/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Peter',
    birthYear: 1994,
    job: 'Sofrtware Engineer',
    freinds: ["Mike", "David", "Steve"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {  // Object Method
    //     return 2020 - birthYear;
    // }
    // calcAge: function () {  // Object Method
    //     console.log(this);
    //     return 2020 - this.birthYear;
    // }

    calcAge: function () {  // Object Method
        this.age = 2020 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
}

console.log(jonas.age); //  undefined

console.log(jonas.calcAge(1999));
// console.log(jonas["calcAge"](2001));
// console.log(jonas.calcAge(jonas.birthYear));
console.log(jonas.age);

// Challenge ->  write a summary method -> "Jonas is 20 years old ${job}, and he has a/no driver's license."

console.log(jonas.getSummary());


//  Challenge 
const mark = {
    fullName: "Mark Miller",
    mass: 80,
    height: 1.81,

    calBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calBMI();
john.calBMI();

console.log(john.bmi);
console.log(mark.bmi);

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}


// ------ Iteration : Loops -------//

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights reps ${rep} 🏋️`);
}
*/

// ------- Looping Arrays, Breaking and Continue ----//

const jonas = [
    "Jon",
    "Bill",
    2020 - 1991,
    ["Mike", "Phil", "Tyson"],
    "Software Engineer"
];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
}

const types = [];
for (let i = 0; i < jonas.length; i++) {
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const birthYear = [1997, 1999, 2000, 2010, 2001];
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
    ages.push(2024 - birthYear[i]);
}
console.log(ages);

//  ------- Continue and Break ------//

console.log(`------ Only Strings ------`);
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue; // continue only skips the current iteration
    console.log(jonas[i], typeof jonas[i]);
}

console.log(`------ Break ------`);
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break; // break terminates the loop as soon as the condition is met
    console.log(jonas[i], typeof jonas[i]);
}

// --- backward loop--//
console.log(`------ Backward Loop ------`);
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i], typeof jonas[i], i);
}

for (let i = 1; i < 4; i++) {
    console.log(`----- Starting Exercise ${i} ----- `);

    for (let j = 1; j < 5; j++) {
        console.log(`Exercise ${i} : Lifting weight rep ${j}`);
    }
}

// ---- While Loop ---//
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights reps ${rep} 🏋️`);
// }

console.log("------------- While Loop -------------");
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights reps ${rep} 🏋️`);
    rep++;
}

let d = 1;
while (d) {
    if (d === 6) {
        break;
    }
    console.log(`Dice No : ${d}`);
    d++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You Rolled dice no. : ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop is about to end .....`);
    }
}