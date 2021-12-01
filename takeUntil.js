//removes a section of the array until the callback function finds the cut off point
const takeUntil = function(arr, callback) {
  let newArr = [];
  for (let element of array) {
    if (callback(element)) {
      return newArr;
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};

module.exports = takeUntil;

