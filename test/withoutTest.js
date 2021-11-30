const without = require('../without');
const assert = require('chai').assert;

describe("#without()", () => {
  it("should return [6,8,9]", () => {
    assert.deepEqual(without([4, 6, 5, 8, 9], [4, 5]), [6,8,9]);
  });

  it("should return [6, 5, 8, 9]", () => {
    assert.deepEqual(without([4, 6, 5, 8, 9], [4]), [6, 5, 8, 9]);
  });

  it("should return [4, 6, 5, 8, 9]", () => {
    assert.deepEqual(without([4, 6, 5, 8, 9], []), [4, 6, 5, 8, 9]);
  });
});
