const map = function (arr, callback ) {
  let newArr = [];
  for(item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
}

console.log(map([1,2,3,4], x => x + 1 ));

module.exports = map;



