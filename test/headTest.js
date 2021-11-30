const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("should return 1", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return '5'", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("should return 'sam'", () => {
    assert.strictEqual(head(["sam", "eden", "morgan"]), "sam");
  });

  it("should return '5' for ['5']", () => {
    assert.strictEqual(head(['5',6,7,"89"]), '5');
  });
});





