const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const flatten = require('./flatten');
const assertEqual = require('./assertEqual');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');

module.exports = {
  head,
  tail,
  middle,
  map,
  takeUntil,
  findKey,
  assertEqual,
  flatten,
  without,
  assertArraysEqual,
  findKeyByValue,
  letterPositions,
  countOnly,
  countLetters,
  eqArrays,
  eqObjects,
  assertObjectsEqual
};
