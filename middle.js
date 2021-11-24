const assertArraysEqual = function (arr1, arr2) {
  const eqArrays = function (arr1, arr2) {
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

const middle = function(arr) {
  let middleNums = [arr[((arr.length / 2)) - 1], arr[(arr.length / 2)]];
  let middleNum = [arr[Math.floor(arr.length / 2)]];
  let newArr;
  if(arr.length <= 2){
    return newArr = [];
  } else if (arr.length % 2 === 0) {
    newArr = middleNums;
  } else {
    newArr = middleNum;
  }
  return newArr;
};

console.log(middle([5,10]));
console.log(assertArraysEqual(middle([5]), []))