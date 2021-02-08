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

/**
 * This function will take in an array containing elements including nested
 * arrays of elements, and return a "flattened" version of the array.
 * @param {array} arrayToFlatten - Array to flatten
 */
const flatten = (arrayToFlatten) => {
  // Create a variable to store the flattenArray
  let flattenArray = [];
  // Loop through the arrayToFlatten
  for (let item of arrayToFlatten) {
    // If item isArray
    if (Array.isArray(item)) {
      // Loop through the sub array
      for (let subItem of item) {
        // Push the item to flattenArray
        flattenArray.push(subItem);
      }
      // Else
    } else {
      // Push the item to flattenArray
      flattenArray.push(item);
    }
  }
  return flattenArray;
};

module.exports = flatten;

// TEST
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
