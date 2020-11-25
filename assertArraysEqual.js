
function assertArraysEqual(array1, array2) {
  
  let isSame = (array1.length === array2.length) && array1.every(function(element, index) {
    return element === array2[index];
  });
  
  if (isSame) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
    
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

