function assertArraysEqual(array1, array2) {
  
  let isSame = eqArrays(array1, array2);  // calling eqArrays to see if two arrays are equal!
  
  
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




const letterPositions = function(sentence) {
  
  const results = {};
  // logic to update results here
  
  for (let i = 0; i < sentence.length; i++) {
 
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);

    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};


const LetPos = letterPositions('help');
console.log(LetPos);

assertArraysEqual(letterPositions("hello").p, [3]);