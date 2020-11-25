
const assertEqual = function(actual, expected) {
  //let head_0 = head;
 
  


  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};


function eqArrays(array1, array2) {
  let isSame = (array1.length === array2.length) && array1.every(function(element, index) {
    return element === array2[index];
  });
  return isSame;
  //console.log(isSame);
}

assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), true); // => should PASS

