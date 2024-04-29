"use strict";

// /Destructuring of arrays
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const hours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  hours,

  order(starterIndex, mainIndex) {
    // enhancement for new syntax for writing functions
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} .`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant);

/* 
const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "Da Vinci",
  Owner: "Zizo",
};

// Looping for loops
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (let item of menu) {
  console.log(item);
}

for (let item of menu.entries()) {
  console.log(item);
}

console.log(...menu.entries());

for (let [idx, el] of menu.entries()) {
  console.log(`${idx + 1} : ${el}`);
}

///////////////////////////////////////
// Coding Challenge #1


We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

let allPlayers = [...players1, ...players2];
console.log(`All Players = `, allPlayers);

let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(`Players 1 Final = `, players1Final);

let {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 30;

// nullish assignment oprtr (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 30;

console.log(rest1);
console.log(rest2);


restaurant.numGuests = 0;
const guest = restaurant.numGuests || 20;
console.log(guest);

// Nullish coalescing value , Nullish : null or undefined
const guestCorrect = restaurant.numGuests ?? 30;
console.log(guestCorrect);


// Short-circuiting

// Logical oprtr can use any data type, return any data type and short-circuiting
console.log(4 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || null || "Hello" || 23 || null);
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

restaurant.numGuests = 23;
const guest2 = restaurant.numGuests || 20;
console.log(guest2);

console.log(`------------AND----------------`);
console.log(0 && "Jonas");
console.log(7 && "Jon");

console.log("Jon" && 23 && null && "john");

// practical examples
if (restaurant.orderPizza) {
  restaurant.orderPizza("paneer", "cheese", "chili flakes", "onion");
}

restaurant.orderPizza &&
  restaurant.orderPizza("paneer", "cheese", "chili flakes", "onion");
// 1. De Structuring
// ---------- Rest Patterns ---------------

// Spread because on RIGHT side of =  oprtr
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of = oprtr
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`Sum = `, sum);
};

add(2, 3);
add(5, 4, 7, 2);
add(8, 2, 5, 4, 1, 2, 4);

const x = [23, 6, 89];
add(...x);

restaurant.orderPizza('paneer', 'onion', 'cheeze', 'chicken');
restaurant.orderPizza('paneer');

// ---------------------- Spread Operator--------

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(`Bad new Array = `, badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

let newMenu = [...restaurant.mainMenu, 'Butter Chicken'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays
const menu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(`Menu = `, menu);

//  Iterables -> arrays, Strings, maps, sets but not objects

const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

// Real world example
// const ingredients = [
//   prompt(`Let's make pasta ! Ingredient 1`),
//   prompt(`Let's make pasta ! Ingredient 2`),
//   prompt(`Let's make pasta ! Ingredient 3`),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { ...restaurant, founder: 'Ravi', foundedIn: 1999 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Raja Bhaiya';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// --------------------- De-structuring


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 3,
  starterIndex: 1,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

let {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//   Default values
let { menu = {}, starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating the variables
let a = 11;
let b = 121;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(open, close);
console.log(o, c);

// ---------------------------------------------------------------
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// let temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

[main, secondary] = [secondary, main]; // de-strucutirng without third variables
console.log(main, secondary);

// Recieve 2 return values from a function
let [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [10, 4, [5, 6]];
// let [i, , j] = nested;
// console.log(i, j);

let [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
