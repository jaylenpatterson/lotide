const takeUntil = function (array, callback) {
  let newArr = []; 
  for(let element of array){
    if(callback(element)){
      return newArr
    } else {
      newArr.push(element)
    }
  }
return newArr
}

module.exports = takeUntil;

