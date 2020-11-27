// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};



//main function
function findKey (inputObject,callBack1) {

  let output = [];
  let arrayKeys = Object.keys(inputObject);  /// keys of inputObject
  
  let b = inputObject[arrayKeys[0]];        // value of first key in inputObject, which is an object:  { stars: 1 }
 

  for (let i = 0; i < arrayKeys.length; i++) {
    
    b = inputObject[arrayKeys[i]];  // value of each key in inputObject, which is an object like  { stars: 1 }
    
    if (callBack1(b)) {
      output.push(arrayKeys[i]);
      break;
    }
  }
  
  if (output.length > 0) {
    return output;
  } else {
    return 'undefined'
  }

};



// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 7 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


console.log(result2);

assertEqual(result2, 'noma');