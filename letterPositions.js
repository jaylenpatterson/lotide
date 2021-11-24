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

console.log(letterPositions("lighthouse in the house"))
/*{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
