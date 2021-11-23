const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} Assertion Passes!`);
  } else {
    console.log(`🛑🛑🛑 ${actual} Assertion Failed`);
  }
};



assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
