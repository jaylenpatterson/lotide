//Compares two results. If result one is equal to result two assertion passes! Otherwise assertion fails.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ ${actual} Assertion Passes!`;
  } else {
    return `🛑🛑🛑 ${actual} Assertion Failed`;
  }
};

module.exports = assertEqual;