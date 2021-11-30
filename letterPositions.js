const letterPositions = function (sentence) {
  let letters = sentence;
  const results = {
  };

  for(let i = 0; i < letters.length; i++){
    if (letters[i] === " "){
      continue;
    } else if (results[letters[i]]){
      results[letters[i]].push(i);
    } else {
      results[letters[i]] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;
