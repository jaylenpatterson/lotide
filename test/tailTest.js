const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return [2,3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("should return [1]", () => {
    assert.deepEqual(tail([225, 1]), [1]);
  });
});