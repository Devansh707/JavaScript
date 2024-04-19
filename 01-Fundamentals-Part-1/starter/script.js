/*
let js = 'amazing';

console.log(40 + 213 + 3213);

let firstName = "Jonas";
console.log(firstName);

console.log(typeof true);
console.log(typeof js);
console.log(typeof firstName);
let x = 23;
console.log(typeof x);

// Dynamic Typing
firstName = 21;
console.log("Firstname after dynamic typing = " + typeof firstName);

//undefined
let year;
console.log("Year typeof = " + typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // Bug/ Error , never corrected due to legacy



// Declaring Variables
// let -> reassingin/mutate the variable
let age = 23;
age = 31; // reassingin/mutate the variable

// const variable value cannot be change
const birthYear = 2000;
birthYear - 2002; // Error -> we cannot reassign i.e. immutable

// const variable cannot be empty , const value should be initialize
//const job; // Error -> const value should be initialize

// var -> old way
var job = "programmer";
job = "engineer"; // mutable / reassingn can be done


lastName = "ModiJi"; // it will create a global scope variable, bad practise
console.log(lastName);


//  -- Operators ----/

const now = 2024;
const ageJon = now - 1993;
const ageDaniels = now - 1999;
console.log("Age Jon = ", ageJon, "Age Dani Daniels = ", ageDaniels);
let x = 10 + 5;
x += 20;
console.log("x = ", x);
x *= 5;
console.log("x = ", x);
x /= 5;
console.log("x = ", x);

const isFullAge = ageDaniels >= 18;


//----- Strings ---/
const firstName = "Devansh", age = 23;
const devansh = `I'm ${firstName}. I'm ${age} years old`; //`` -> template literal/ template Strings
console.log(devansh);

console.log(`Just a regular template String by ${firstName}....`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
with multiple
lines`);


//---- Decisions : IF/ELSE

const age = 15;
const isOldEnough = 18;
if (age >= isOldEnough) {
    console.log('Sarah can Start driving..😊');
    // alert('wohooo sarah can start driving');
} else {
    const yearsLeft = isOldEnough - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1995;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// ---- Types Conversion and Coercion ---/
// Type Conversion - When we manually convert the type of variable
// Type Coercion - When JS Automatically converts the type of variable
// Type Conversion
const inputYear = '1995', x = 23;
console.log(Number(inputYear) + 18, inputYear);
console.log(inputYear + 18);

// console.log(Number("Jon")); -> Invalid
console.log(typeof NaN);

console.log(String(33), String(x));

// Type Coercion
console.log('I am ' + 23 + " years old");
console.log(`I am ${23} years old`);
console.log('23' - '10' + 14);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


// ---- Truthy/Falsy Values---- 
// Falsy Values : 0, '', undefined, null, NaN
const money = 1000;
if (money) {
    console.log(`Don't spend ${money} all`);
} else {
    console.log(`Earn please`);
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is Undefined");
}

const age = 17;
if (age === 18) console.log('You are adult');
else console.log('You are not adult yet')
// === -> does not perform type coercion 18 === '18' gives false / Strict equality
// == perform type coercion 18 == '18' gives true/loose equality operator

const favourite = Number(prompt(`What's your favourite number`));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) {
    console.log(`${favourite} it is`);
}

if (favourite !== 23) {
    console.log('Why not 23 ? ');
} else {
    console.log(`${23} it is`);
}


// --- Switch Case--
const day = 'wednesday';
switch (day) {
    case 'monday':
        console.log('Plan course Structure');
        console.log('Go To Coding Meetup');
        break;
    case 'tuesday':
        console.log("Prepare Theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy weekend");
        break;
    default:
        console.log("Not a valid day");
}
*/

// -----Ternary Opr ------/

const age = 23;
age >= 18 ? console.log(`I am allowed to drink alcohol.`) : console.log("I'm not allowed!");

const drink = age >= 18 ? 'alcohol' : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "alcohol" : "water"}`);