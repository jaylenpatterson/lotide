//adds each letter that appears in the string to an object. If an letter shows up more than once the object tracks how many more times it appears

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

