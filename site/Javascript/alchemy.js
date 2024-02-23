
//all shoes are on sale this week!
const shoesCost = 49;

module.exports = shoesCost;

// get message

function getMessage() {
    return "Honey is cool!";     
}

module.exports = getMessage;

// Add two
function addTwo(a) {
   const output = a + 2;
   return output;
}

let a = 2

console.log(addTwo)


module.exports = addTwo;

// multiply
function product(a,b) {
    return a*b;
}

module.exports = product;

// average
function average(a, b, c, d) {
    const sum = a + b + c + d;
    return sum/4;
}

module.exports = average;


// random to generate random comments 
function getRandom() {
 
const myluck = Math.random();
return myluck;
}

module.exports = getRandom;

// floor to round off
function getFloor(x) {
    const integer = Math.floor(x);
    return integer;
}

module.exports = getFloor;


//Conditionals 

In programming it's often necessary to write code that depends on some condition to be true.

For a good example, let's imagine we're building a website! 

We want users to be sent to the dashboard only if they are logged in. Otherwise we should send them to the login page:

if(loggedIn) {
    // loggedIn is true
    goToDashboard();
}
else {
    // loggedIn is false
    goToLogin();
}

You could think of this logic as: If the user is logged in, then send them to the dashboard. If not, send them to the login page.

Our logic is branched based on the condition of whether or not the user is logged in. We can look at this from the perspective of a flow chart:

//1: Is Equal

function isEqual(a, b) {
    if(a === b){
        return true;  }
}

module.exports = isEqual;


// is not equal
function isNotEqual(a, b) {
    if(a !== b) {
    return true;
} else {
    return false;
        }
}
module.exports = isNotEqual;

//else

function isNotEqual(a, b) {
    if(a !== b) {
    return true;
} else {
    return false;
        }
}
module.exports = isNotEqual;

// greater than

function greater(first, last) {
    if (first > last){
        return first;
    } if (last > first){
        return last;
    } if (first = last){
        return;
    }
}

module.exports = greater;


// is enough

function isEnough(cost, money) {
    if (money >= cost){
    return true;
    }   {
        return false;
    }
}

module.exports = isEnough;

// else if 
function canAccess(purchasedSubscription, freeTrial) {
    if (purchasedSubscription){
        return true;
    }
    else if (freeTrial) {
        return true;
    }

    else {
        return false;
    }
}

module.exports = canAccess;


// Var a = b, undefined a Q from X
function test(){
    var a = b = 5;
}
test();
console.log(b);
console.log(a);

Output
5
a is not defined
error

// As mentioned in the previous two stages, += is short-hand for str = str + "a". This will append our two strings together with "a" being added to the end of str.

// Age code in playcode.io 
function scream(n) {
    let str = "Your age is ";
    const year = "2024"; 
    return (str +(year - n));
}

console.log (scream(2002));

// Scream function to print a string multiple times
function scream(n) {
    let str = "";
    for (let i = 1; i <= n; i++)
    { str += "";}
    return str;
}

console.log(scream());
