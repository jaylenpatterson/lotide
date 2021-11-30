const map = require('../map');
const assert = require('chai').assert;

describe("#assertEqual()", () => {
  it(`should return [7, 10, 6, 5]`, () => {
    assert.deepEqual(map([4, 7, 3, 2], x => x + 3), [7, 10, 6, 5]);
  });
  
  it(`should return [4, 6, 8, 10]`, () => {
    assert.deepEqual(map([2, 4, 6, 8], x => x + 2), [4, 6, 8, 10]);
  });
});

const words = ["ground", "control", "to", "major", "tom"];

