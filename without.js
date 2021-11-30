const without = function(source, remove) {
  let answer = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j <= remove.length; j++) {
      if (source[i] === remove[j]) {
        answer.splice(i, 1);
      }
    }
  }
  return answer;
};

module.exports = without

