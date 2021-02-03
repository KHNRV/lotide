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
 * This function takes in an array and return the middle-most element(s) of the
 * given array.
 * @param {array} arrayToAnalyse - Array where to find the middle element(s)
 * @returns {array} - Middle element(s) of the given array
 */
const middle = (arrayToAnalyse) => {
  // Create an array middleElements to store the elements found
  let middleElements = [];
  // If the length of arrayToAnalyse is equal or less than 2
  if (arrayToAnalyse.length <= 2) {
    // Return an empty array
    return middleElements;
    // If the length of arrayToAnalyse is even
  } else if (arrayToAnalyse.length % 2 === 0) {
    // Push the two values in the middle in middleElements
    middleElements.push(arrayToAnalyse[arrayToAnalyse.length / 2 - 1]);
    middleElements.push(arrayToAnalyse[arrayToAnalyse.length / 2]);
    // Else if the length of arrayToAnalyse is uneven
  } else if (arrayToAnalyse.length % 2 !== 0) {
    // Push the value in the middle in middleElements
    middleElements.push(arrayToAnalyse[Math.floor(arrayToAnalyse.length / 2)]);
  }
  // Return middleElements
  return middleElements;
};

// TEST
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
