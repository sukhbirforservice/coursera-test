// Logical Operators

Let's say we wanted to travel to an island by boat or by plane. In English, we use or in the previous sentence to express we're willing to take either mode of transportation.

In JavaScript, we can use ||:

const boat = true;
const plane = false;

const willTravel = boat || plane;

console.log(willTravel); // true
In the example above, one of the conditions is true in the OR operation (the boat), therefore the value stored in willTravel is true!

The || operator is commonly referred to as the Logical OR because it will evaluate to true if either (or both) of the inputs are true.

  
if(car) {
    driveToAirport();
}
else if(motorcycle) {
    driveToAirport();
}
else if(truck) {
    driveToAirport();
}

If we needed to change the driveToAirport function, we would have to change it in 3 places. 

 It's good practice to DRY up your code. This stands for Don't Repeat Yourself. You should always try to avoid code redundancy where possible!


Let's try to accomplish the same functionality with the Logical OR (||) operator:

if(car || motorcycle || truck) {
    driveToAirport();
}
Phew, much cleaner! The || operator takes two values and returns true if either boolean value is true:

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false


Q. We willEat if we have pizza, donuts or cookies! 

Complete the willEat function. The three arguments will be boolean values (true or false). If any of them are true, return true.

function willEat(hasPizza, hasDonuts, hasCookies) {
    if (hasPizza || hasDonuts || hasCookies){
        return true;
    } else return false;
}

// more simpler way

function willEat(hasPizza, hasDonuts, hasCookies) {
    return hasPizza || hasDonuts || hasCookies;
}


// TRUTHY AND FALSEY VALUES

  This operator is also sometimes referred to as the default operator, due to its behavior with truthy and falsey values.

Take, for example:

console.log("" || "Something Else"); // Something Else
The empty string "" is a falsey value, so || will take the second value in this operation.

This can be pretty useful with variables! We can use this to create a default message if one is not defined:

const message = WELCOME_MESSAGE || "Hello there!";
 Here message is guaranteed a truthy value even if WELCOME_MESSAGE is empty.

And it's not just limited to empty strings either:

const age = user.age || 99;
 If user.age is undefined or 0 we will default to 99. For that matter user.age could be any falsey value and it would default to 99.

 Can you think of any other good examples for default values?

 Your Goal: Handle an Undefined
The double function here is almost complete! We also want double to be able to handle when x is undefined.

Example:

const result = double(); 

console.log(result); // 0
If no value is provided for x, return 0.

 Be careful with order of operations here! In the expression x || y * z the y * z will evaluate before x || y unless you use a parenthesis: (x || y) * z.
// Logical operator as Default Operator
function double(x) {
    return x * 2 || 0;
}

module.exports = double;|

//AND operator

Another important logical operator is &&, which is called Logical AND:

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
 Notice that both values must be true for the expression to evaluate to true. We need this to be true AND that to be true as well.

We can, of course, do the same thing with variables:

let a = true;
let b = true;

console.log(a && b); // true

b = false;

console.log(a && b); // false
console.log(b && a); // false

If the diver is still aboveWater, they can breathe regardless of the tank connection and oxygen:

canBreathe(false, false, true); // true
canBreathe(true, false, true); // true
canBreathe(true, true, true); // true
If they are not aboveWater, they need to be connected to the tank and the tank needs oxygen in order to breathe:

canBreathe(true, false, false); // false
canBreathe(true, true, false); // true

Solution.
1st attempt:
function canBreathe(isConnected, hasOxygen, aboveWater) {
if (aboveWater){
return true;
} else if(isConnected && hasOxygen){
return true;
} else return false;
}
2nd attempt:
function canBreathe(isConnected, hasOxygen, aboveWater) {
return (isConnected && hasOxygen) || aboveWater;
}

// Guard Operator

const user = { name: 'bob' }
console.log(user && user.name); // bob

const user2 = undefined;
console.log(user2 && user2.name); // undefined

const user2 = undefined;
console.log(user2.name);


function friendName(friend) {
    return friend && friend.name;
}

module.exports = friendName;

// Not Operator

console.log(!true); // false
console.log(!false); // true
It will also flip truthy and falsey values:

console.log(!2); // false
console.log(!undefined); // true

There's a river that runs right between two towns. In order for cars to cross the river, we built a bridge!

Trouble is, there's only room for 1 car to cross the bridge at a time. This means that if both cars were to be crossing at the same time, neither would be able to cross.

Complete the carCrossing function to return true if and only if one car is crossing.

function carCrossing(aCrossing, bCrossing) {
    if (aCrossing && bCrossing){
        return false;
    }
    return aCrossing || bCrossing;
}

module.exports = carCrossing;

function carCrossing(aCrossing, bCrossing) {
    return (aCrossing && !bCrossing) || (bCrossing && !aCrossing);
}

const error1 = new Error("Something bad happened!");
const error2 = Error("Something bad happened!");

const a = 3;

if(a === 3) {
    throw new Error("we dont want a to be 3");
}

// <-- we never reach this line

const a = 3;

if(a === 3) {
    throw new Error("we dont want a to be 3");
}

// <-- we never reach this line

// Catch Error

const text = readFile("book");

try {
    readFile("book"); 
}
catch(ex) {
    console.log(ex); // EISDIR: illegal operation
}

function catchError(fn) {
    try {
        fn();    
    }
    catch(fn){
        return fn;
    }
    return false;
    
}

module.exports = catchError;

// Start an error

Type Error
Commonly thrown when the variable is not the expected type for the operation. Here's a couple examples:

const x = 3;

x();
 Throws TypeError: x is not a function.

let b;

b.prop;
 Throws TypeError: Cannot read property 'prop' of undefined

Reference Error
Thrown in cases where the variable is not defined. More technically, the reference cannot be found:

z();
 Throws ReferenceError: z is not defined.

Syntax Error
Thrown in cases where the code is not valid JavaScript:

const a = 3;

a.72;
 Throws SyntaxError: Unexpected number.

 If you use a transpiler like Babel JS this code may not pass the compilation step due to invalid syntax.

Range Error
Thrown when a value is passed to a function where the value is not within the intended range of accepted values. For example, an array initializer:

new Array(Infinity)
 Throws RangeError: Invalid array length.

function startError() {
 let b = "a";

 return a;   
} // This throws reference error.


TYPE CONVERSION
const string = "2"
console.log(Number(string)); // 2

const string = "hello"
console.log(Number(string)); // NaN

const string = "2";
console.log(+string); // 2

const string2 = "hello";
console.log(+string2); // NaN

// Given a string, convert it to a number. If the string is not a number, return 0.

function toNumber(string) {
    let a = Number(string);

    if(!a){
        return 0;
    } else return a;
}

module.exports = toNumber;


// TO string

const a = 123;

console.log(a.toString()); // "123"
console.log(String(a)); // "123"

console.log(false.toString()); // "false"

console.log(123 + ""); // "123"
console.log(true + ""); // "true"

console.log(2 + "2"); // "22"

// Given two values a and b, combine them together as strings and return the result. The values may be a number, a boolean or a string.

function combineToString(a, b) {
    return a + b.toString();
}

module.exports = combineToString;


// Is truthy

console.log(Boolean(2)); // true
console.log(Boolean("")); // false

if(3) {
    console.log('3 is truthy!');
}

Given some value a return whether or not the value is truthy.

Falsey values: false, 0, "", null, undefined, and NaN.

function isTruthy(a) {
    if (!a) {
        return false;
    } else return true;
}

module.exports = isTruthy;

// Loosely equals
console.log(3 === 3); // true
console.log("apple" === "orange"); // false

console.log("2" === 2); // false

console.log("2" == 2); // true

 Your Goal: Is Loosely Equal?
Return true if a and b are loosely equal to each other. If not, return false.

function looseEquals(a, b) {
    if (a == b){
        return true;
    } else return false;
}

module.exports = looseEquals;

// Object to JSON

const person = '{"name":"Jim"}';

const person = JSON.stringify({ name: "Jim" });

console.log(person); // {"name":"Jim"}

function toJSON(obj) {
  return JSON.stringify(obj);
} 

module.exports = toJSON;

// Valid JSON

const itemJSON = `{
    "type": "food",
    "edible": true,
    "quantity": 2
}`


const item = JSON.parse(itemJSON);

console.log(item.type); // food
console.log(item.edible); // true

const item = JSON.parse(itemJSON);

console.log(item.type); // food
console.log(item.edible); // true

const personJSON = `
    {
        "name": "Mondey D. Luffy",
        "age": 19,
        "isReal": false
    } 
`;

module.exports = personJSON;

// Either not both Function

function eitherNotBoth(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return false;
    } else if (!num % 3 == 0 && num % 5 == 0 || num % 3 == 0 &&
        !num % 5 == 0) {
        return true;
    }
}

// Chai code 
const { assert } = require('chai');
const eitherNotBoth = require('../eitherNotBoth');

describe('eitherNotBoth', () => {
    describe('divisible by 3 but not 5', () => {
        it('should return true', () => {
            assert.equal(eitherNotBoth(3), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(9), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(18), true);
        });
    });

    describe('divisible by 5 but not 3', () => {
        it('should return true', () => {
            assert.equal(eitherNotBoth(5), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(10), true);
        });

        it('should return true', () => {
            assert.equal(eitherNotBoth(20), true);
        });
    });

    describe('divisible by 5 and 3', () => {
        it('should return false', () => {
            assert.equal(eitherNotBoth(15), false);
        });

        it('should return false', () => {
            assert.equal(eitherNotBoth(30), false);
        });

        it('should return false', () => {
            assert.equal(eitherNotBoth(60), false);
        });
    });
})





function fizzBuzz(numbers) {
    let str = "";
for (let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    if (num % 3 == 0 && num % 5 == 0) {
        str += "fizzbuzz";
    } else if (!num % 3 == 0 && num % 5 == 0 || num % 3 == 0 &&
        !num % 5 == 0) {
        return true;
    }
    return str;
}
}

// Check if it is correct

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius;

let x = '101010';

parseInt(x, 2) // 42
The toString() method also handles non-integers and negative numbers. For example:

x = -101010
parseInt(x, 2); // -42

x = 101010.101010;
parseInt(x, 2); // 42

