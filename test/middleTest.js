const assert = require('chai').assert;
const middle = require('../middle');
describe("#middle()", () => {
  it("should return [20,30]", () => {
    assert.deepEqual(middle([10, 20, 30, 40]), [20, 30]);
  });
  
  it("should return [1]", () => {
    assert.deepEqual(middle([225, 1]), []);
  });

  it("should return [20]", () => {
    assert.deepEqual(middle([10,20,30]), [20]);
  });
});
