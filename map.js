
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





const words = ["ground", "control", "to", "major", "tom"];

//main function map
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


// test the output of map function
assertArraysEqual(results1, [ 'g', 'c', 't', 'm' ]); // => should PASS


