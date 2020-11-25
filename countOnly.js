// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");



const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //console.log(item);
    if (itemsToCount[item] === true) {

      if (results[item] === undefined) {
        results[item] = 1;
        } else {
          results[item] += 1;
        }
      }
    }
    return results;
  }

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
console.log(result1);