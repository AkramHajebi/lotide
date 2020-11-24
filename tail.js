function tail(array1) {
  let array2 = array1;
  array2.shift();
  return array2;
}


const assertEqual = function(actual, expected) {
  //let head_0 = head;
 
  let isSame = (actual.length === expected.length) && actual.every(function(element, index) {
    return element === expected[index];
  });


  if (isSame === false) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
