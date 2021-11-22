const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} Assertion Passes!`);
  } else {
    console.log(`🛑🛑🛑 ${actual} Assertion Failed`);
  }
};

const tail = function(arr) {
  let newArr = arr;
  return newArr.slice(0);
}


let nums = [1,2,3];
tail(nums)
assertEqual(nums.length, 3)