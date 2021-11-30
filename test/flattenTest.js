const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten()", () => {
  it("should return [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4, 5,[6], [[[7]]]]]), [1, 2, 3, 4, 5, 6, 7]);
  });
  it("should return ['apples']", () => {
    assert.deepEqual(flatten([[[[["apples"]]]]]), ["apples"]);
  });
  it("should return []", () => {
    assert.deepEqual(flatten([[[[[]]]]]), []);
  });
  it("should return ['hello','hi']", () => {
    assert.deepEqual(flatten([[[['hello'],['hi']]]]), ['hello','hi']);
  });
});

