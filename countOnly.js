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

module.exports = countOnly;