const map = function (arr, callback ) {
  let newArr = [];
  for(item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
}

const words = ["ground", "control", "to", "major", "tom"];




