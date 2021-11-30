const middle = function(arr) {
  let middleNums = [arr[((arr.length / 2)) - 1], arr[(arr.length / 2)]];
  let middleNum = [arr[Math.floor(arr.length / 2)]];
  let newArr = [];
  if(arr.length <= 2){
    return newArr;
  } else if (arr.length % 2 === 0) {
    newArr = middleNums;
  } else {
    newArr = middleNum;
  }
  return newArr;
};


module.exports = middle;