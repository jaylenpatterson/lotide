
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions()", () => {
  it("should return { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] }", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] });
  });
  it("should return { J: [0], a: [1, 7, 15], y: [2], l: [3, 17], e: [4, 16], n: [5, 8], d: [9], m: [11], i: [12], c: [13], h: [14]}", () => {
    assert.deepEqual(letterPositions("Jaylen and michael"), { J: [0], a: [1, 7, 15], y: [2], l: [3, 17], e: [4, 16], n: [5, 8], d: [9], m: [11], i: [12], c: [13], h: [14]});
  });
  it("should return {}", () => {
    assert.deepEqual(letterPositions(""), {});
  });
  it("should return {H: [0], I:[1,2,3,4]}", () => {
    assert.deepEqual(letterPositions("HIIII"), { H: [0], I: [1, 2, 3, 4] });
  });
});

