// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
 
  let array1 = Object.keys(actual);
  let array2 = Object.keys(expected);

  console.log(array1);
  console.log(array2);

  let isSame = (array1.length === array2.length) && array1.every(function(element, index) {
    return (element === array2[index] && actual[element] === expected[element]); /// check if the element(key) exist in both object & if the value for the key are same for both objects
  });
  
  if (isSame) {
    console.log(`Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    
  } else {
    console.log(`Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
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

console.log(Object.keys(result));

assertEqual(result, { L: 2, H: 2 });
//console.log(asser2);
