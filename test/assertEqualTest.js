const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual()", () => {
  let actual = "Bootcamp";
  let expected = "Bootcamp";

  it(`should return ✅✅✅ ${actual} Assertion Passes!`, () => {
    assert.equal(assertEqual(actual, expected), `✅✅✅ ${actual} Assertion Passes!`);
  });
  it(`should return 🛑🛑🛑 ${actual} Assertion Failed`, () => {
    assert.equal(assertEqual(actual, "lighthouse"), `🛑🛑🛑 ${actual} Assertion Failed`);
  });
});

