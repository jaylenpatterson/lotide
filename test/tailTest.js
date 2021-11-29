const assertEqual = require('../assertEqual');
const tail = require('../tail')

let nums = [1, 2, 3, 4, 5];
console.log(tail(nums))  //return value
console.log(assertEqual(nums.length, 5)) // dosent modify original array
console.log(assertEqual(tail(nums).length, 4)) // checks that the function returns an array with 1 less value than it had originally