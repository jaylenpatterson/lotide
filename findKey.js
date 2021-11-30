let findKey = function(obj, callback) {
  let answer = undefined;
  for(let keys in obj){
    if (callback(obj[keys])){
      answer = keys;
      return answer
   }
  }
  return answer
}
module.exports = findKey;
