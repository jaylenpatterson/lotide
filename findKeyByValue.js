const findKeyByValue = function(obj, value) {
  let answer = undefined;
  for(let keys in obj){
    console.log(obj[keys])
    if(obj[keys] === value) {
      answer = keys;
    }
  }
  return answer
}; 

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

module.exports = findKeyByValue;