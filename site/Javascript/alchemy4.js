this keyword

const YEAR = (1000 * 60 * 60 * 24 * 365);

function addYear() {
    setTimeout(function() {
        this.age++;
    }, YEAR);
}

const person = { name: 'Fred', age: 29 }

addYear.call(person);


const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge (this.name, function (age) {
        this.age = age;
    }.bind(this));
}

module.exports = Celebrity;

CallBack Function 

function forEach(arr, callback) {
    // for each element in the arr, run the callback, passing in the element
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
    // Return the modified array if needed, otherwise, you can return undefined explicitly
    return arr;
}

// Example usage
console.log(forEach([1,2,4,4], (element, index) => {
    console.log(`Element at index ${index} is ${element}`);
}));
