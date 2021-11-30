const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    return `✅✅✅ ${inspect(actual)} Assertion Passes!`;
  } else {
    return`🛑🛑🛑 ${inspect(actual)} Assertion Failed!`;
  }
};

module.exports = assertObjectsEqual;