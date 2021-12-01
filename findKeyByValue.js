//
const findKeyByValue = function(obj, value) {
  let answer = undefined;
  for (let keys in obj) {
    if (obj[keys] === value) {
      answer = keys;
    }
  }
  return answer;
};

module.exports = findKeyByValue;