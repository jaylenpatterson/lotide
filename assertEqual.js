const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ ${actual} Assertion Passes!`;
  } else {
    return `🛑🛑🛑 ${actual} Assertion Failed`;
  }
};




assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
