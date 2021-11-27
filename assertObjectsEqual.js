

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let eqArrays = function(arr1, arr2) {
    let falseCount = 0;
    //Checks if there are any indexes wehre arr1 != arr2. If there is false count increases
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        falseCount++;
      }
    }
    //If false count is anything other than 0 then that means that arr1 doesn't equal arr2
    if (falseCount === 0) {
      return true;
    } else {
      return false;
    }
  };
  // Changes the objects into an array of
  const eqObjects = function(object1, object2) {
    let newObj1 = Object.keys(object1);
    let newObj2 = Object.keys(object2);
    let condition1 = false;
    let condition2 = false;
    let arr1 = [];
    let arr2 = [];
    let answer;
  // Checks if the object is an array. If so calls the function eqArrays to determine if the object contains all the same keys
    if (Array.isArray(newObj1) && Array.isArray(newObj2)) {
      if (eqArrays(newObj1, newObj2)) {
        condition1 = true;
      }
    }

  // checks if both objects contain all the same values
    for (let value in object1) {
      arr1.push(object1[value]);
    }
    for (let value in object2) {
      arr2.push(object2[value]);
    }

    if (eqArrays(arr1, arr2)) {
      condition2 = true;
    }
  // checks if both the keys and values are equal. If so returns true. Else returns false.
    if (condition1 === true && condition2 === true) {
      answer = true;
    } else {
      answer = false;
    }
    return answer;
  };
  // passes or fails an assertion.
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ ${inspect(actual)} Assertion Passes!`);
  } else {
    console.log(`🛑🛑🛑 ${inspect(actual)} Assertion Failed!`);
  }
};

assertObjectsEqual({ 1: 2, 2: 3, 7: 4 }, { 1: 2, 2: 3, 3: 4 });