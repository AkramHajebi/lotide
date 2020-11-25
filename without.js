
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

//assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

//let b = without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


function without(inputArray, notElements) {
  let inputArray2 = inputArray;

  for (let i = 0; i < inputArray2.length; i++) {
    for (let j = 0; j < notElements.length; j++) {

      if (inputArray2[i] === notElements[j]) {
        inputArray2.splice(i,1);
      }
    }
  }
  return inputArray2;
}


assertArraysEqual(words, ["hello", "world", "lighthouse"]);
