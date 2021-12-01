const eqArrays = require('./eqArrays');
const assertArraysEqual = function(arr1, arr2) {

// Outputs results depending on if eqArrays is true or false
  if (eqArrays(arr1, arr2)){
    return "✅✅✅ Array One is equal to Array Two!"
  } else {
    return "❌❌❌ Array One is not equal to Array Two!"
  }
}

module.exports = assertArraysEqual;
