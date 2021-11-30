const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual()", () => {
  it("should return ✅✅✅ Array One is equal to Array Two!", () => {
    assert.strictEqual(assertArraysEqual([2, 4, 6, 8], [2, 4, 6, 8]), "✅✅✅ Array One is equal to Array Two!");
  });

  it("should return ✅✅✅ Array One is equal to Array Two!", () => {
    assert.strictEqual(assertArraysEqual([99, 20, 15, 2000, 25], [99, 20, 15, 2000, 25]), "✅✅✅ Array One is equal to Array Two!");

    it("should return ❌❌❌ Array One is not equal to Array Two!", () => {
      assert.strictEqual(assertArraysEqual([99, 20, 15, 2000, 25], [99, 20, 15, 2000, 25]), "❌❌❌ Array One is not equal to Array Two!");
    });
  });
});

console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]))