const assertEqual = require('../assertEqual');
const head = require('../head');

console.log(assertEqual(head([5, 6, 7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));





