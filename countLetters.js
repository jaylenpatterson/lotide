const countLetters = function(str) {
  let letters = str.split(" ").join("");
  let container = {
  };
  for (let letter of letters) {
    let addLetter = function() {
      let num = 1;
      if (container[`${letter}`]) {
        container[`${letter}`] ++;
      } else {
        container[`${letter}`] = num;
      }
    };
     
    addLetter(letter);
  }
  return container;
};

module.exports = countLetters;

