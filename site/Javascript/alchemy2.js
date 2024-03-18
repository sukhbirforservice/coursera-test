// Modulus Operator, This is a program to find if a number is Even or not.
function Even(Number){
let count = "Number is not even";
let remainder = Number % 2;
const isEven = remainder === 0;
{
if (isEven){
  return Number;
} else {
  return count;
}
}
}

console.log(Even())

// Even number from 1 to 11
let count = 0;
for(let i = 1; i <= 20; i++)
{let remainder = i % 2;
  const isEven = remainder === 0;
  if (isEven){
  count++;}
}
console.log (count);

// This is not a clean code, and other thing is undefined
/*
function scream(n) {
 let count = "a";
    let count2 = "A";
    let count3 = (count + count2);
    let count4 = count3.repeat(n)
    for(let i = 1; i <= n; i++)
    {  
    let remainder = i % 2;
  const isEven = remainder === 0;
  if (isEven){
  count;} 
  else {
    count2;
}
} 
console.log (count4);
}

console.log (scream(5))
*/

// this is the main code
function scream(n) {
    let str = "";
    for (let i = 1; i <= n; i++){
        const remainder = i % 2;
        const isEven = remainder === 0;
        if(isEven){
            str += "A";
        } else {
            str += "a"
        }
        
    }
    return str;
}

console.log(scream(6));


// function to find if a number is even or not
function isEven(num){
let a = num % 2;

    if (a <= 0){
        return true;
    }  else {
        return false;
    }  
}


//the top double function to find the largest double for the value that is below the top.
function topDouble(value, top) {

    let a = value * 2;
    while (a < top) {
        value = a;
        a = value * 2;
    }
    return value;
}

module.exports = topDouble;

// why does the above code doesn't work


// function to find the sum all of numbers, starting from 1, up to and including num.

function maxSum(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        count += i;
 }
 return count;
}

module.exports = maxSum;

// Replace John, A string is stored in the variable fakeName. Take this fake name and use it to replace every occurrence of "John" in the message., Do not change the message in other way.

const fakeName = require('./fakeName');

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

module.exports = message;

// The function checkNumber takes a single argument: a number num , The function should return the string positive if the number is positive, negative if the number is negative, and zero if the number is zero.

function checkNumber(num) {
    if (num < 0) {
        return "negative";
    }
    else if (num <= 0) {
        return "zero";
    }

    else {
        return "positive";
    }
}

module.exports = checkNumber;

// The function maxSum takes a number argument num. Your goal is find the sum all of numbers, starting from 1, up to and including num.

function maxSum(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        count += i;
 }
 return count;
}

module.exports = maxSum;

// STRING MANIPULATION

// Looking up Characters

"Hello".charAt(1); // e
"Hello"[1]; // e

/* Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
If the first character is x return true. If not, return false.
*/

function startsWithX(string) {
let a = string.charAt(0);
    if (a === "x"){
        return true;
    } else {
        return false;
    }
    
}

module.exports = startsWithX;


function startsWithX(string) {
let a = string.charAt(0);
    if (a === "x"){
        return true;
    } else {
        return false;
    }
    
}

module.exports = startsWithX;


function startsWithX(string) {
let a = string.charAt(0);
    if (a === "x"){
        return true;
    } else {
        return false;
    }
    
}

module.exports = startsWithX;
 


// Is all X

isAllX("Xx"); // true
isAllX("xAbX"); // false


function isAllX(string) {

    for (let i = 0; i < string.length; i++) {
        let b = i;
        let a = string.charAt(b);
        if (a !== "x" && a !== "X") {
            return false;
        }
    }
    return true;
}

module.exports = isAllX;


// solution 
function isAllX(string) {
    for(let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() !== "x") {
            return false;
        }
    }
    return true;
}

module.exports = isAllX;

// Find the First X, In the string argument find the index of the first lower-case "x" and return it.

"Hello".indexOf("e"); // 1
"abca".indexOf("a"); // 0 
"abc".indexOf("q"); // -1 
"happy dog bark".indexOf("dog"); // 6

function findFirstX(string) {
    a = string.indexOf("x")

    return a;
}

console.log(findFirstX("xxfhf"));
module.exports = findFirstX;

// Split at X

"An apple".slice(0,2); // An
"The 40 Thieves".slice(4,8); // 40 T

"Please Slice Me".slice(7); // Slice Me

function splitAtX(string) {
    a = string.indexOf("x");
    b = string.slice(0, a);
    c = string.length;
    d = string.slice(a + 1, c);

    if (b.length < d.length) {
        return d;
    } else {
        return b;
    }
}

module.exports = splitAtX;



//Arrays

const array = [70, 80, 65, 100, 90, 95];
Then we would be able to loop over the array, summing together each test score:

let total = 0; 
for(let i = 0; i < array.length; i++) {
    total += array[i];
}

Once we have a total sum of test scores, we can simply divide it by the array length (the number of tests in our population), to get our average score:

const average = total / array.length;


// Create Arrays

const numbers = [1, 2, 3, 4, 5];
const booleans = [true, false, true, true];
const strings = ["happy", "go", "lucky"];
// nested arrays
const nested = [[1, 2, [1, 2]], 2];

const array = [3, 2 , 1]; // <-- create an array here!

module.exports = array;

// Has one Array
const element = array[0];
const arr = ['h','a','p','p','y'];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log( hasOne([1,2,3]) ); // true
console.log( hasOne([1,1,1]) ); // true
console.log( hasOne([4,5,6]) ); // false


function hasOne(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            return true;
        } 
    } 
        return false;
}

module.exports = hasOne;

function returnOccurrence(array, num){
  for (let i = array.length; i >=0; i--) {
        if (array[i] == 1) {
            return true;
        } 
    } 
        return false;
}

}

module.exports = returnOccurrence;
// verify this

// sumEven

const result = average([80,90,98,100]); 
console.log( result ); // 92
function average(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return (total / array.length);
}

examples
console.log( sum([1]) ); // 0
console.log( sum([1, 2, 3, 4]) ); // 6
console.log( sum([1, 1, 4, 1, 1]) ); // 4


function sumEven(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++){
        let a = array[i]%2; 
        if(a <= 0) {
            count = count + array[i];
        }
    } return count; 
}

module.exports = sumEven;

// unique arrays

function greaterThanFive(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        // is this element greater than 5?
        if(element > 5) {
            // yes, push this element on our array
            newArray.push(element);
        }
    }
    return newArray;
}

function unique(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (newArray.indexOf(element) === -1) {
            newArray.push(element);
        }
    }
    return newArray;
}
module.exports = unique;


// Add one

const array = [1,2,3];
array[0] = 5;
console.log(array); // [5,2,3]
const array = [1,2,3];
addOne(array); 
console.log(array); // [2,3,4]

function addOne(array) {
        for (let i = 0; i < array.length; i++){
        array[i] = array[i] + 1
    } 
}

module.exports = addOne;

// Remove Occurrences

function greaterThanFive(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        if(array[i] > 5) {
            array.splice(i, 1);
        }
    }
}


const array = [1, 2, 3, 1];
removeOccurrences(array, 1);
console.log( array ); // [2, 3]


// Let's use splice to remove elements that are greater than 1:

const array = [1,2,3];
for(let i = 0; i < array.length; i++) {
    if(array[i] > 1) {
        array.splice(i, 1);
    }
}
console.log(array); // [1, 3]


// Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.

Modify the array directly and do not return anything from this function.

function removeOccurrences(array, num) {
 for (let i = array.length-1; i >= 0; i--)
 {
     if (array[i] === num)  {
         array.splice(i, 1);
     }   
 }   
}

module.exports = removeOccurrences;

// Objects

const person = {
    hairColor: 'brown',
    toes: 10,
    grumpy: true
}

This object shows that we can use numbers, strings and booleans as values.

This person has "brown" hairColor, 10 toes and is grumpy, unfortunately. 

We can retrieve these values by key:

console.log( person.toes ); // 10
console.log( person.hairColor ); // brown


const team = {
    name: "Mets",
    wins: 86,
    inPlayoffs: false,
};


const order = {
    pizzas: 2,
    extraCheese: true,
    deliveryInstructions: 'Do not ring the bell',
};


const team = {
    name: 'Meths',
    wins: 89,
    inPlayoffs: false,
};
module.exports = order;

const team = {
    name: "Mets",
    wins: 86,
    inPlayoffs: false,
};

console.log( team.name ); // Mets
console.log( team['name'] ); // Mets

const order = {
    pizzas: 3,
    extraCheese: true,
    deliveryInstructions: "Round the back, please!",
};
 The function should take this order and retrieve the number of pizzas:

const totalPizzas = numberOfPizzas(order);
console.log( totalPizzas ); // 3

function numberOfPizzas(order) {
    return order.pizzas;
}


module.exports = numberOfPizzas;


// Many Orders
const team = {
    name: "Mets",
    wins: 86,
    inPlayoffs: false,
};
In a league, we might have many teams:

const teams = [team1, team2, team3];
for(let i = 0; i < teams.length; i++) {
    console.log(teams[i].name); 
}

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];
 For this example above, we'd expect 18 total pizzas:

const totalPizzas = numberOfPizzas(orders);
console.log( totalPizzas ); // 18


// Function to add pizzas
function numberOfPizzas(orders) {
    let totalPizzas = 0;
    for (let i = 0; i < orders.length; i++) {
        totalPizzas = orders[i].pizzas + totalPizzas;
    }  return totalPizzas;
}

// Typed orders

const card = {
    suit: 1,
    value: 5
}
What is this card's suit? We know the value is 1, but what does that mean? 

Let's define CARD_SUITS:

const CARD_SUITS = {
    DIAMONDS: 0,
    HEARTS: 1,
    SPADES: 2,
    CLUBS: 3
}
Using this object we can clearly label our card suit:

const card = {
    suit: CARD_SUITS.HEARTS,
    value: 5
}


const ORDER_TYPES = {
    PIZZA: 0, 
    FRIES: 2, 
    SANDWICHES: 3,
}

module.exports = ORDER_TYPES;

// Add by Type



// diffrent case
function Case(string){
		let newString = "";
		for(let i=0; i< string.length; i++){
			const a = string.indexOf(string[i])%2;
			if (a === 0){
				let element = string[i].toLowerCase();
				newString = newString +element;
			} else {
				let element = string[i].toUpperCase();
				newString = newString +element;
			}	
		} return newString;
	}

	console.log(Case("Honey"));


// Add by Type

const ORDER_TYPES = require('./orderTypes');
const orders = [
    { pizzas: 3, type: ORDER_TYPES.PIZZA },
    { wings: 12, type: ORDER_TYPES.WINGS },
];
 In this example we would only sum up pizzas from the first order!

const totalPizzas = numberOfPizzas(orders);
console.log( totalPizzas ); // 3


const ORDER_TYPES = {
    PIZZA: 0, 
    FRIES: 2, 
    SANDWICHES: 3,
}

module.exports = ORDER_TYPES;

const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let totalPizzas = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].type == ORDER_TYPES.PIZZA)
        totalPizzas = orders[i].pizzas + totalPizzas;
    }  return totalPizzas;
}

module.exports = numberOfPizzas;

// Object KEys

const object = { a: 1, b: 2, c: 3 } 
for(let key in object) {
    console.log(key);
}
Over three iterations this will log a, b and c which are the keys of object.

Additionally, we can use some methods on the Object constructor itself, which will return an array of the requested data:

const object = { a: 1, b: 2, c: 3 } 
console.log( Object.keys(object) ); // ['a', 'b', 'c']
console.log( Object.values(object) ); // [1, 2, 3]


function numberOfKeys(object) {
    let a = Object.keys(object);
    let b = a.length;
    return b;

} 

module.exports = numberOfKeys;


// Secret Key
const person = {
    name: "James",
    age: 22
}

person.name = "Sally";
person["age"] = 30;

console.log( person.name ); // Sally
console.log( person.age ); // 30
 Just like retrieval we can use the . or [] notation.

We can also remove keys completely:

const person = { 
    name: "Bob"
}

delete person.name;

console.log( person.name ); // undefined

function removeSecret(object) {
    object.secret = undefined;
}

module.exports = removeSecret

// Shortest String

function shortestString(str1, str2) {
    if (str1.length < str2.length){
    return str1;
} else {
    return str2;
}
}

module.exports = shortestString;


// Half Value

function halfValue(numbers) {
let newArray = [];
    for (let i = 0; i < numbers.length; i++){
        element = numbers[i]/2;
        odd = numbers[i]%2;
        if (odd == 0){
            newArray.push(element);
        } else {
            newArray.push(Math.round(element)); 
        }
    } return newArray;
}

module.exports = halfValue;

// Your Goal: Count the C's
The function countC takes a string str as its only argument.

This function should return the number of c's found in the string. It must count both lower-case c and upper-case C.

function countC(str) {
let count = 0;
for (let i = 0; i < str.length; i++){
    if (str[i].toLowerCase() == "c"){
        count++;
    }
} return count;
}

module.exports = countC;

// Count Vowels

function countVowels(str) {
let count = 0;
    for(let i = 0; i < str.length; i++){
        if ('aeiou'.includes(str[i].toLowerCase())){
            count++;
        } 
    } return count;
}


module.exports = countVowels;

// Reverse

Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.

For example, reverse("cat") would return the string "tac".

function reverse(string) {
  let a = ""; 
  for(let i=string.length-1; i >= 0;i--){
a += string[i];
  } return a;
}

module.exports = reverse;
