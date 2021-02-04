/**
 * This function keeps collecting items from a provided array until the callback
 * provided returns a truthy value.
 * @param {array} array
 * @param {callback} callback
 */
const takeUntil = (array, callback) => {
  // Create a result array
  const result = [];
  // Iterate through the array
  for (const value of array) {
    // If !callback
    if (!callback(value)) {
      // Push the item to the result array
      result.push(value);
    } else {
      // else, return the result array
      return result;
    }
  }
};

// TEST FUNCTIONS
/**
 * Function that takes in two arrays and returns true or false, based on a
 * perfect match.
 * @param {array} firstArray -
 * @param {array} secondArray -
 * @returns {boolean} Return whether the arrays or identical
 */
const eqArrays = (firstArray, secondArray) => {
  // Compare the length of the arrays.
  if (firstArray.length === secondArray.length) {
    // Compare every items of the arrays idividually. Return false at the first no match.
    for (let index in firstArray) {
      if (firstArray[index] !== secondArray[index]) {
        return false;
      }
    }
  } else {
    // Return false if no match
    return false;
  }
  // Return true if every comparison were a match
  return true;
};

/**
 * Function that takes in two arrays and print out if they match or not
 * @param {array} actualArray - Array to test
 * @param {array} expectedArray - Array expected
 */
const assertArraysEqual = (actualArray, expectedArray) => {
  // If the two array match:
  if (eqArrays(actualArray, expectedArray)) {
    // Log success
    console.log(`✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
    // Else
  } else {
    // Log failure
    console.log(`🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

// TEST
const numbers = [1, 5, 34, 76, 345, 34, 546, 345654, 13, 1];
const smallNumbers = takeUntil(numbers, (value) => value > 500);
assertArraysEqual(smallNumbers, [1, 5, 34, 76, 345, 34]);
