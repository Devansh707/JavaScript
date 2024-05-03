'use strict';

/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1, // setting default values in ES6
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 5);
createBooking('LH123', 8, 1000);
createBooking('LH123', undefined, 2000);

//  -------------- Passing arguments - by value and by reference -----------//

const flight = 'LH123';
const jonas = {
  name: 'jonas scmtman',
  passport: 23455135,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH2321';
  passenger.name = 'Mr.' + passenger.name;

  if (checkIn === 23455135) {
    alert('Checked In');
  } else {
    alert('Wrong Passport ! ');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);


// ----------- First class functions vs high - order functions --------- //

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High order function --------
const transformer = function (str, fn) {
  console.log(`Original String = ${str}`);
  console.log(`Transformerd string : ${fn(str)}`);
  console.log(`Transformed by : ${fn.name} `);
};

transformer('JavaScript is the best !', upperFirstWord);
transformer('JavaScript is the best !', oneWord);

const high5 = function () {
  console.log('👍');
};

document.body.addEventListener('click', high5);


//  ----------- Function returning Function ---------- //

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} from ${name}`);
  };
};

const greeter = greet('Hey !');
greeter('Steve');
greeter('Mike');

greet('hello ! ')('Adam');

const greetArrow = greeting => {
  return function (name) {
    console.log(`${greeting} from ${name}`);
  };
};

const greeterArrow = greetArrow('Arrow Hello ! ');
greeterArrow('Mat');
greetArrow('Arrow Hello !')('Ricky');

*/

//  ------ ------------//

const lufthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book : function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'Mike');
lufthansa.book(258, 'Garry');

const eurowings = {
  airLine: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//  ------------------------ Call Method ---------------------------- //
//   we can call method of other object by pointing the this keyword to calling object.

const book = lufthansa.book;

// Does not work
// book(23, 'sara');

book.call(eurowings, 234, 'dev');
console.log(eurowings);

const swiss = {
  airLine: 'Swiss Air line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 458, 'Dani');
console.log(swiss);

//  ---------------- **Apply method *** ----------------- //
const flightData = [583, 'Mary Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// --- alternate option of apply and more better
book.call(swiss, ...flightData);

// ---------------- Bind Method ------------------- //
// This will create and return a new function with this keyword now pointing to the object we pass. Like Eg.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(43, 'Robin');

const bookEW23 = book.bind(eurowings, 32);
bookEW23('Jonas');
bookEW23('martin');

//  ----- With Event Listeners -----------
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // this will not work as addEventListener will point the this keyword to the querySelector('.buy')

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // so we are binding the this keyword to lufthansa object. not using call method becasuse it'll call the method .

const addTax = (rate, value) => value + (value * rate) / 100;

console.log(addTax(120, 26500));

const addVAT = addTax.bind(null, 50);
console.log(addVAT(400000));

// ----- Another Way of doing -----
const addTAXRate = function (rate) {
  return function (value) {
    return value + (value * rate) / 100;
  };
};

const addVAT2 = addTAXRate(60);
console.log(addVAT2(400000));
