// creates a new array, executes the callback function on each item in the original array then sends the results to the new array, returns the new array

const map = function(arr, callback) {
  let newArr = [];
  for (let item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
};

module.exports = map;



