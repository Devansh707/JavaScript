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

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  /// 1.
  registerNewAnswer: function () {
    const ans = Number(
      prompt(
        `${this.question} \n ${this.options.join('\n')}\n (Write option number)`
      )
    );
    if (typeof ans === 'number' && ans >= 0 && ans <= 3) {
      this.answers[ans]++;
      console.log(`answers array = `, this.answers);
    } else {
      alert(`Invalid input !!!`);
    }
    //4.
    this.displayResults();
    this.displayResults('string');
  },
  //   3.
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else {
      //   let ansString = `Poll results are `;
      //   for (let str of this.answers) {
      //     ansString += str + ', ';
      //   }
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
//2.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

const data1 = {
  estion: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};
