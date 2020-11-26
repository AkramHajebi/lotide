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
//assertEqual(1, 1);

// main function
function countLetters(input) {
  let output = {};
  
  for (const item of input) {

    if (item !== ' ') {

      if (output[item] === undefined) {
        output[item] = 1;
      } else {
        output[item] += 1;
      }
    //console.log(item);
    //  input[0]
    }
  }
  return output;
}


const result = countLetters("LHL "); // {L: 2, H:1}
console.log(result);

//const asser2 = assertEqual(result, { L: 2, H: 1 });;
//console.log(asser2);
