'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // to basically remove/overwrite existing html element.

  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

  moves.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${move}</div>
      </div>  
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}INR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}💶`;


  const outgoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outgoing)}💶`;

  // let's put interest of 1.2% on each deposit transaction we made
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => {
      return int >= 1;
    })
    .reduce((acc, interest) => acc + interest);
  labelSumInterest.textContent = `${interest}💶`;
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(nameuser => nameuser.at(0))
      .join('');
  });
};

let currentAccount;

btnLogin.addEventListener('click', e => {
  // Prevent Form from submitting -> because the form tag of html reloads the page after submitting and we need to prevent it
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';

    // Removing the focus from input box
    inputLoginPin.blur();

    // display movements
    // display balance
    // display summary
    updateUI(currentAccount);
  }
});

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
};

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recieverUserName = inputTransferTo.value;

  let recieverAcc = accounts.find(acc => acc.userName === recieverUserName);
  console.log(amount, recieverAcc);

  // check if amount is available in current balance
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.userName !== currentAccount.userName
  ) {
    // Do Transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert('Invalid Credentials');
    console.log('Invalid Credentials');
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();

  // sorted = sorted ? false : true;
  sorted = !sorted;
  displayMovements(movements, sorted);
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  } else {
    // alert
    alert('Requested amount is more !!');
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //check if user name and pin credentials are correct
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(`Index : `, index);
    // Delete Account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

createUserNames(accounts);
/////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


const checkDogs = function (dogsJulia, dogsKate) {
  const juliaDog2 = dogsJulia.slice(0);
  juliaDog2.splice(0, 1);
  juliaDog2.splice(-2, 2);
  console.log(juliaDog2);

  const dogs = juliaDog2.concat(kateDogs);

  dogs.forEach(function (val, i) {
    if (val >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${val} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];
checkDogs(juliaDogs, kateDogs);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


// 1.
const calcAverageHumanAge = function (ages) {
  return ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
};

// 2.
const removeDogs = function (dogs) {
  return dogs.filter(dog => dog >= 18);
};
// 3.
const averageAdultAgeAllDogs = function (dogs) {
  return dogs.reduce((acc, age, i) => acc + age, 0) / dogs.length;
};
const juliaDogs = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const kateDogs = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const juliaAdultDogs = removeDogs([5, 22, 4, 21, 15, 18, 3]);
const kateAdultDogs = removeDogs([16, 26, 20, 25, 6, 1, 4]);

console.log(juliaAdultDogs);
console.log(kateAdultDogs);

const averageAllDogsAge = averageAdultAgeAllDogs([
  ...juliaAdultDogs,
  ...kateAdultDogs,
]);
console.log(`Average Adult Age for all dogs : ${averageAllDogsAge}`);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

// const calcAverageHumanAge = function (ages) {
//   return ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
// };
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

*/

/* Lectures
// ---------------------- SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
let sliceArr = arr.slice(2, 4);
console.log(sliceArr, arr);
let backArr = arr.slice(-2);
console.log(backArr[0]);
let newArr = [...arr];
console.log(newArr);

// ------------SPLICE - mutates/change the original array
// console.log(arr.splice(2));
console.log(arr);
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// ----------------Reverse - mutates the original array --------
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// -----------CONCAT - does'nt mutates the original array ----
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//  --- JOIN
console.log(letters.join('-'));

const arr = [23, 11, 65];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

//  ---------- Looping -- For Each Method ------------//

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('--------- FOR EACH -----------');

movements.forEach(function (movement, index, array) {
  //  order of parameter is important
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposindexted ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

//*We cannot break out of forEach loop. Break/Continue statement does'nt work in forEach loop at all. forEach will always loop over the entire array.
//  Iteration
// 0: function(200)
// 1. function(450)
// 2. function(400)
// .... so on


// ------- For Each for maps, sets ----------//
// Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value} `);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
});


// ----------- Array Methods - Maps, Filter, Reduce ----------//
// map creates a brand new array of the original array.
//  Filter - Use to filter the and returns a new array containing the array elements that passed a specified test condition
// Reduce - reduce boils all array elements down to one single value (e.g. adding all elements together)


// ---------- Maps ---------//
const eurToUSD = 1.2;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUSD;
// });

const movementsUSD = movements.map(mov => mov * eurToUSD); //  using arrow functions as callbacks

console.log(movements);
console.log(movementsUSD);

const movementsUSDFor = [];
for (const move of movements) {
  movementsUSDFor.push(move * eurToUSD);
}
console.log(movementsUSDFor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    //  order of parameter is important
    `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(
      mov
    )}.`
);

console.log(movementsDescriptions);


// ----------- Filter ---------------//
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(`Withdrawal = `, withdrawal);


//  --------- Reduce ----------//
// it will return a value

console.log(movements);

// accumulator -> SNOWBAll
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr;
// }, 0);
const balance = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

//  Maximum value of the movements array using reduce method
const max = movements.reduce(
  (acc, mov) => (acc = Math.max(acc, mov)),
  movements[0]
);
console.log(`Max = `, max);


//  ---------- Chaining Methods ------//
// find total deposit of movements array, convert it to USD and  add it .

const eurToUSD = 1.2;

// Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUSD)
  // .map((mov, i, arr) => { // for debugging
  //   console.log(arr);
  //   mov * eurToUSD;
  // })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

*/

//  --------- Array Method - Find Method ------------//
// it will not return the new array unlike the filter method, but it will return the first element that satisfies the condition.

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements, firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);



//  -------- Array Method - some -----//
console.log(movements);

// Checks only for Equality
console.log(movements.includes(-130));

//  checks for condition and returns boolean value
console.log(movements.some(mov => mov === -130));
console.log(movements.some(mov => mov > 500));

//  ---------- Array method - every method --------//
// only returns true if every/all element satisfies/passes the condition/check, only then the every method returns true
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

console.log(`----------------------------------------------------------`);

// One Separate call backs function and use multiple times same function

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
console.log(movements.map(deposit));


// -------------- Array Methods - Flat and FlatMap --------//
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overAllBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overAllBalance);

const overAllBal = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBal);

// --- flatMap -- combines operation of map and flat , It goes only 1 degree deep
const overAllBal2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overAllBal2);
*/

//  ----------- Sorting Arrays---------- //
// sort method - it mutates the original array. Default It sorts on the basis of strings
// strings
const owners = ['Marta', 'Jonas', 'Zach', 'Adam'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort());

// we have to write a compare callback function for numbers
// return < 0, A, B
// return > 0, B, A

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});

console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

