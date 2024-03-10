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
