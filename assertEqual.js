const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passes!");
  } else {
    console.log("🛑🛑🛑 Assertion Failed");
  }
};



assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
