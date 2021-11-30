const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters()", () => {
  it("should return 5", () => {
    assert.deepEqual(countLetters("Jayylennn"), { J: 1, a: 1, y: 2, l: 1, e: 1, n: 3 });
  });

  it("should return 7", () => {
    assert.deepEqual(countLetters("Michael"), {M: 1, i: 1, c: 1, h: 1, a: 1, e: 1, l: 1});
  });
});