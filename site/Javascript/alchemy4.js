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
