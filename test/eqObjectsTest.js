const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects()", () => {
  it("should return true", () => {
    assert.deepEqual(eqObjects({ a: 1, b: 7, c: 4 }, { a: 1, b: 7, c: 4 }), true);
  });

  it("should return true", () => {
    assert.deepEqual(eqObjects({ cc: 1, b: 48, ad: 39 }, { cc: 1, b: 48, ad: 39 }), true);
  });

  it("should return false", () => {
    assert.deepEqual(eqObjects({ a: 18, b: 78, c: 4 }, { a: 1, b: 7, c: 44 }), false);
  });

  it("should return false", () => {
    assert.deepEqual(eqObjects({ b: 18, c: 78, a: 4 }, { a: 1, b: 7, c: 44 }), false);
  });

  it("should return false", () => {
    assert.deepEqual(eqObjects({ a: 18, c: 78, c: 4 }, { a: 1, b: 7, c: 44 }), false);
  });

});
