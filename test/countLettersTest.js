const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters()", () => {
  it("should return { J: 1, a: 1, y: 2, l: 1, e: 1, n: 3 }", () => {
    assert.deepEqual(countLetters("Jayylennn"), { J: 1, a: 1, y: 2, l: 1, e: 1, n: 3 });
  });
  it("should return {M: 1, i: 1, c: 1, h: 1, a: 1, e: 1, l: 1}", () => {
    assert.deepEqual(countLetters("Michael"), {M: 1, i: 1, c: 1, h: 1, a: 1, e: 1, l: 1});
  });
  it("should return {H: 1, a: 1, p: 2, y: 1}", () => {
    assert.deepEqual(countLetters("Happy"), { H: 1, a: 1, p: 2, y: 1 });
  });
  it("should return {} ", () => {
    assert.deepEqual(countLetters(""), {});
  });
  it("should return { H: 1, a: 1, p: 2, y: 1, T: 1, i: 1, m: 1, e: 1, s: 1 }", () => {
    assert.deepEqual(countLetters("Happy Times"), { H: 1, a: 1, p: 2, y: 1, T: 1, i: 1, m: 1, e: 1, s: 1 });
  });
});