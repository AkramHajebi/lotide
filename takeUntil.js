
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






// main function
function takeUntil(data1, callBack) {
  let output = [];
  for (let i = 0; i < data1.length; i++) {

    if (!callBack(data1[i])) {
      output.push(data1[i]);
    
    } else {
      break;
    }
  }
  return output;

}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood']); // => should PASS





//[ 1, 2, 5, 7, 2 ]
//---
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]