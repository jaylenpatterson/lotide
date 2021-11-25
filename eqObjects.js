const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} Assertion Passes!`);
  } else {
    console.log(`🛑🛑🛑 ${actual} Assertion Failed`);
  }
};

let eqArrays = function (arr1, arr2) {
  let falseCount = 0;
  //Checks if there are any indexes wehre arr1 != arr2. If there is false count increases
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      falseCount++;
    }
  }
  //If false count is anything other than 0 then that means that arr1 doesn't equal arr2
  if (falseCount === 0) {
    return true;
  } else {
    return false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  let newObj1 = Object.keys(object1);
  let newObj2 = Object.keys(object2);



  for(let keys in newObj1){
    if (Array.isArray(newObj1) && Array.isArray(newObj2)){
      if(eqArrays(newObj1, newObj2)){
        return true
      }
    }else if (newObj1.length !== newObj2.length) {
      return false
    } else if(newObj1[keys] === newObj2[keys]){
      return false
    } else {
      return true
    }
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

console.log(assertEqual(eqObjects(cd,dc),true))
console.log(assertEqual(eqObjects(cd, cd2), false))