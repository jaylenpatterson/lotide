const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// checks if both arrays are either true or false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));