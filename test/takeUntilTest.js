const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil()", () => {
  it(`should return [4, 7]`, () => {
    assert.deepEqual(takeUntil([4, 7, 3, 2], x => x === 3), [4, 7]);
  });

  it(`should return [2, 4, 6]`, () => {
    assert.deepEqual(takeUntil([2, 4, 6, 7, 8, 9], x => x === 7), [2, 4, 6]);
  });

  it(`should return [7, 10, 6, 5]`, () => {
    assert.deepEqual(takeUntil([7, 10, 6, 5, 3, 88, 47 ,30], x => x === 3), [7, 10, 6, 5]);
  });
});
