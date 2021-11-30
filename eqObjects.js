const eqArrays = require('./eqArrays');
//Check if two objects are equal
const eqObjects = function(object1, object2) {
  let newObj1 = Object.keys(object1);
  let newObj2 = Object.keys(object2);
  let newObjVal1 = Object.values(object1);
  let newObjVal2 = Object.values(object2);
  if (Array.isArray(newObj1) && Array.isArray(newObj2) && Array.isArray(newObjVal1) && Array.isArray(newObjVal2)) {
    if (eqArrays(newObj1, newObj2) && eqArrays(newObjVal1, newObjVal2)) {
      return true;
    } else if (eqArrays(newObj1, newObj2) === false || eqArrays(newObjVal1, newObjVal2) === false) {
      return false;
    }
  }
};

module.exports = eqObjects;