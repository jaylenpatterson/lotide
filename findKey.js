const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅ ${actual} Assertion Passes!`;
  } else {
    return `🛑🛑🛑 ${actual} Assertion Failed`;
  }
};

let findKey = function(obj, callback) {
  let answer = undefined
  for(let keys in obj){
    if (callback(obj[keys])){
      answer = keys;
   }
  }
  return answer
}

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 7 }
}, x => x.stars === 7), "Akelarre"))

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 7 }
}, x => x.stars === 8), undefined))