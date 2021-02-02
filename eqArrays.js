/**
 * Compare two value and print out if they match or not
 * @param {*} actual - Enter the variable to test
 * @param {*} expected - Enter the expected value of the variable
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
