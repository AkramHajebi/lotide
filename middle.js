

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




function eqArrays(array1, array2) {
  let isSame = (array1.length === array2.length) && array1.every(function(element, index) {
    return element === array2[index];
  });
  return isSame;
  //console.log(isSame);
}


// actual function

function middle(input) {
  let size = input.length;
  let index = 0;
  if (size <= 2) {
    return [];

  } else if (size % 2 === 0) {
    index = size / 2;
    return [input[index - 1], input[index]];

  } else {
    index = Math.floor(size / 2);
    return [input[index]];
  }
}

let m = middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
//console.log(m);

assertArraysEqual(m, [3, 4, 5]); // => should PASS
