const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');
const inspect = require('util').inspect;

describe("#assertObjectsEqual", () => {
  it("should return ✅✅✅ ${inspect(actual)} Assertion Passes!", () => {
    let actual = {a: 1, b: 2 }
    let expected = { a: 1, b: 2 }
    assert.deepEqual(assertObjectsEqual(actual, expected), `✅✅✅ ${inspect(actual)} Assertion Passes!`);
  });

  it("should return 🛑🛑🛑 ${inspect(actual)} Assertion Failed!", () => {
    let actual = { a: 7, b: 2 }
    let expected = { a: 6 , b: 82 }
    assert.deepEqual(assertObjectsEqual(actual, expected), `🛑🛑🛑 ${inspect(actual)} Assertion Failed!`);
  });

  it("should return ✅✅✅ ${inspect(actual)} Assertion Passes!", () => {
    let actual = { attack: 37, defence: 10 }
    let expected = { attack: 37, defence: 10 }
    assert.deepEqual(assertObjectsEqual(actual, expected), `✅✅✅ ${inspect(actual)} Assertion Passes!`);
  });

  it("should return 🛑🛑🛑 ${inspect(actual)} Assertion Failed!", () => {
    let actual = { attack: 30, defence: 16 }
    let expected = { attack: 37, defence: 10 }
    assert.deepEqual(assertObjectsEqual(actual, expected), `🛑🛑🛑 ${inspect(actual)} Assertion Failed!`);
  });

});
