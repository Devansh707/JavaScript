'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive.');

// const interface = 'Audio';
// const private = 12;


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
*/

// --------- Arrays -----//

const freind1 = "Michael";
const freind2 = "Steven";
const freind3 = "Peter";

const freinds = ["Michael", "Steven", "Peter"];
console.log(freinds);

const years = new Array(1991, 1984, 2008, 2022);
const days = new Array(4);
console.log(days.length);

console.log(freinds[0]);

const months = new Array("jan", "feb", "match");
console.log(months);

freinds[2] = "Jay";
console.log(freinds);