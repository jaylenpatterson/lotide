const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays()", () => {
  it("should return true", () => {
    let actual = [22, 38, 10, 24];
    let expected = [22, 38, 10, 24];
    assert.strictEqual(eqArrays(actual, expected), true);
  });
  
  it("should return false", () => {
    let actual = [22, 38, 20];
    let expected = [22, 38, 10, 24];
    assert.strictEqual(eqArrays(actual, expected), false);

    it("should return false", () => {
      let actual = [];
      let expected = [22, 38, 10, 24];
      assert.strictEqual(eqArrays(actual, expected), false);
    });
  }); 
});