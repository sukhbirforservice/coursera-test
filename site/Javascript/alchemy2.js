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
