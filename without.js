const assertArraysEqual = function(arr1, arr2) {
  const eqArrays = function(arr1, arr2) {
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
  // Outputs results depending on if eqArrays is true or false
  if (eqArrays(arr1, arr2)) {
    return "Array One is equal to Array Two!";
  } else {
    return "Array One is not equal to Array Two!";
  }

};


const without = function(source, remove) {
  let answer = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j <= remove.length; j++) {
    // console.log(source[i], remove[j])
      if (source[i] === remove[j]) {
        answer.splice(i, 1);
      }
    }
  }
  //console.log(itemsToRemove)
  return answer;
};


console.log(without([4,6,5,8,9],[4,5]));
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

console.log(assertArraysEqual(without([4, 6, 5, 8, 9], [4, 5]),[4,4,4]));
console.log(assertArraysEqual(without([4, 6, 5, 8, 9], [4, 5]), [6, 8, 9]));
console.log(assertArraysEqual(without([4, 6, 5, 8, 9], [4, 5]), [4912, 75, 2]));