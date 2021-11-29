const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ ${actual} Assertion Passes!`;
  } else {
    return `🛑🛑🛑 ${actual} Assertion Failed`;
  }
};

module.exports = assertEqual;