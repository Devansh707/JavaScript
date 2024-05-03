"use strict";

// /Destructuring of arrays
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const openingHours = {
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
  openingHours,

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
//  -------------- Strings -2 --------//
const airLine = "TAP Air Portugal";
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.Io \n";
const normalEmail = loginEmail.toLowerCase().trim();
console.log(email === normalEmail);

// replacing
const pricsGB = "398,97";
const priceUS = pricsGB.replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

//  ---- String Split ---- //
console.log("a+very+nice+string".split("+"));
const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (let word of names) {
    namesUpper.push(word[0].toLowerCase() + word.slice(1));
  }
  return namesUpper;
};

const n1 = capitalizeName("jessica ann smith davis");
const n2 = capitalizeName("jonas schmedtmann");
console.log(n1, n2);

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));

// Repeat
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
/* 
//  -------------- Strings --------//
// Strings cannot be changed, they are immutable and primitive

const airLine = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(Number(plane[1]));
console.log(plane[2]);
console.log("B737"[0]);
console.log(airLine.length);
console.log("B737".length);

console.log(airLine.indexOf("r"));
console.log(airLine.lastIndexOf("r"));
console.log(airLine.indexOf("Portugal"));

console.log(airLine.slice(4));
console.log(airLine.slice(airLine.indexOf("Air")));

console.log(airLine.slice(4, 7));

console.log(airLine.slice(0, airLine.indexOf(" ")));
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

console.log(new String("jonas"));
console.log(typeof new String("jon"));
console.log(typeof new String("joans").slice(1));
///////////////////////////////////////
// Coding Challenge #3


Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1.
const uniqueEvents = new Set(gameEvents.values());
console.log(uniqueEvents);

const uniqueEventsArray = [...uniqueEvents];
console.log(uniqueEventsArray);

//2.
console.log(gameEvents.delete(64));
console.log(gameEvents);

//3.

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const totalTime = [...gameEvents.keys()].pop();
console.log(
  `More Specifically An event happened, on average, every ${
    totalTime / gameEvents.size
  } minutes`
);

for (const [min, value] of gameEvents.entries()) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[ ${half} HALF] ${min}: ⚽️ ${value}`);
}



//  ---------------- Maps -------------------//
// const rest = new Map();
// rest.set("name", "Rajwada");
// rest.set(1, "Italy");
// console.log(rest.set(2, "lisbon"));
// rest
//   .set("categories", ["Italian", "Pizza"])
//   .set("open", 9)
//   .set("close", 22)
//   .set(true, "We are open")
//   .set(false, "We are closed");
// console.log(rest);
// console.log(rest.get("categories"));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("name"));
// console.log(rest.size);
// console.log(rest.delete(2));
// // console.log(rest.clear);
// rest.set([1, 2], "Test");
// const arr = [4, 5];
// rest.set(arr, "Test2");
// console.log(rest);
// console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best programming lang. in the world ?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "try again"],
]);
console.log(question);

// Convert object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}
const ans = Number(prompt("Your answer ?"));
console.log(ans);

console.log(question.get(question.get("correct") === ans));

// Convert map to array

const mapArray = [...question];
console.log(`Array of Map = `, mapArray);


// ------------ Sets -------------

const orderSet = new Set(["Pasta", "Paneer", "pizza", "Pasta", "Paneer"]);
orderSet.add("onion");
orderSet.add("onion");

console.log(orderSet.size);
console.log(orderSet);
console.log(orderSet.has("pizza"));
console.log(orderSet.has("butter"));
orderSet.add("Garlic Bread");
console.log(orderSet);
orderSet.delete("pizza");
console.log(orderSet);

for (let order of orderSet) {
  console.log(order);
}

// ------ Example of Sets-------------
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);
const staffArray = [...staffUnique];
console.log(staffArray);

console.log(new Set("Devansh Srivastava").size);

///////////////////////////////////////
// Coding Challenge #2


Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

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

//1.
const entries = game.scored.entries();

for (let [idx, player] of entries) {
  console.log(`Goal ${idx} : ${player}`);
}

//2.
let sum = 0;
for (let score of Object.values(game.odds)) {
  sum += score;
}
console.log(sum / Object.entries(game.odds).length);

//3.
const odds = Object.entries(game.odds);
for (let [team, odd] of odds) {
  let teamStr = team === "x" ? "draw" : game[team];
  console.log(
    `Odd of ${teamStr !== "draw" ? "victory " + teamStr : "draw"} : ${odd}`
  );
}

// accessing properties through
const Properties = Object.keys(openingHours);
console.log(Properties);

// looping through objects
let openStr = `We are open on ${Properties.length} days : `;
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// loop over entire object
const entries = Object.entries(openingHours);
// console.log(`Entries `, entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

console.log(restaurant);

console.log(restaurant.openingHours.mon);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.thu?.open);
console.log(restaurant.openingHours.fri?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const isOpen = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we're open from ${isOpen}`);
}

// Optional Chaining Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRissoto?.(0, 1) ?? "Method does not exist");

// Array optional chaining

const users = [{ name: "jon", email: "jon@gmail.com" }];
console.log(users[0]?.name ?? "User array is empty.");


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
