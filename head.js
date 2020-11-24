// FUNCTION IMPLEMENTATION

function head(array1) {
  if (array1.length === 0){
    return 'undefined'
  }
  return array1[0];

}


const assertEqual = function(actual, expected) {
  //let head_0 = head;
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
assertEqual(head([]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");



//let k = head(["Hello", "Lighthouse", "Labs"]);

//console.log (k);
