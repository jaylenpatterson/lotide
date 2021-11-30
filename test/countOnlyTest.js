const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly()", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Austin",
    "Agouhanna",
    "Fang",
    "Austin",
    "Kavith",
    "Jason",
    "Austin",
    "Salima",
    "Fang",
    "Joe",
    "Austin"
  ];

  it("should return { Fang: 2, Jason: 1 }", () => {
    assert.deepEqual((countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Austin": true })), { Austin: 4, Fang: 2, Jason: 1, });
  });

  it("should return", () => {
    assert.deepEqual((countOnly(firstNames, { "Jason": false, "Karima": true, "Fang": true, "Agouhanna": true, "Austin": false })), { Agouhanna: 1, Fang: 2});
  });
});
