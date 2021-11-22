const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} Assertion Passes!`);
  } else {
    console.log(`🛑🛑🛑 ${actual} Assertion Failed`);
  }
};


const head = function(arr) {
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
