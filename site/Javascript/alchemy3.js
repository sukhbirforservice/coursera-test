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
