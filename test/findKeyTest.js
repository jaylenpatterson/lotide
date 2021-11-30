const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey()", () => {
  let obj = {
    "Blue Hill": { stars: 1 },
    "Ora": { stars: 20 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "milly": { stars: 20 },
    "Akelarre": { stars: 7 }
  };

  it(`should return Akelarre`, () => {
    assert.deepEqual(findKey(obj, x => x.stars === 7), "Akelarre");
  });

  it(`should return noma`, () => {
    assert.deepEqual(findKey(obj, x => x.stars === 2), "noma");
  });

  it(`should return Ora`, () => {
    assert.deepEqual(findKey(obj, x => x.stars === 20), "Ora");
  });

  it(`should return Blue Hill`, () => {
    assert.deepEqual(findKey(obj, x => x.stars === 1), "Blue Hill");
  });
});
