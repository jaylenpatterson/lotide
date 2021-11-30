const map = require('../map');
const assert = require('chai').assert;

describe("#map()", () => {
  it(`should return [7, 10, 6, 5]`, () => {
    assert.deepEqual(map([4, 7, 3, 2], x => x + 3), [7, 10, 6, 5]);
  });
  
  it(`should return [4, 6, 8, 10]`, () => {
    assert.deepEqual(map([2, 4, 6, 8], x => x + 2), [4, 6, 8, 10]);
  });

  it(`should return [2, 4, 6, 8]`, () => {
    assert.deepEqual(map([2, 4, 6, 8], x => x + 0), [2, 4, 6, 8]);
  });

  it(`should return [4, 16, 36, 64]`, () => {
    assert.deepEqual(map([2, 4, 6, 8], x => x * x), [4, 16, 36, 64]);
  });

  it(`should return [2, 4, 6, 8]`, () => {
    assert.deepEqual(map([2, 4, 6, 8], x => x), [2, 4, 6, 8]);
  });
});


