
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
