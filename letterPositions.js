// loops through an array, returns an object that contains each letter in the array and all of its index positions for every instance of that letter
const letterPositions = function(str) {
  let letters = sentence;
  const results = {
  };

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === " ") {
      continue;
    } else if (results[letters[i]])   {
      results[letters[i]].push(i);
    } else {
      results[letters[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;
