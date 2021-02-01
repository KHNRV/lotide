const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * Outpout the value at index 0 of a given array
 * @param {array} inputArray - Input an array to find its head
 * @returns {*} Value at index 0 of the imput array
 */
const head = function(inputArray) {
  return inputArray[0];
};

//TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);
