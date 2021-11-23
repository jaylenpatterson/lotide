const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} Assertion Passes!`);
  } else {
    console.log(`🛑🛑🛑 ${actual} Assertion Failed`);
  }
};

let eqArrays = function(arr1, arr2) {
  let falseCount = 0;
  //Checks if there are any indexes wehre arr1 != arr2. If there is false count increases
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      falseCount ++;
    }
  }
  //If false count is anything other than 0 then that means that arr1 doesn't equal arr2
  if (falseCount === 0) {
    return true;
  } else {
    return false;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);