const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} Assertion Passes!`);
  } else {
    console.log(`🛑🛑🛑 ${actual} Assertion Failed`);
  }
};

const countOnly = function(arr, obj) {
  let container = {
  };
    // loops through each name in the array
  for (let names of arr) {
    // stores all names in arr that are also true in obj in a container.
    let addName = function(names) {
      let num = 1;
      if (container[`${names}`]) {
        container[`${names}`] ++;
      } else if (obj[`${names}`]) {
        container[`${names}`] = num;
      }
    };
    addName(names);
  }
  return container;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
