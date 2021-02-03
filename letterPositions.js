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
 * This function returns all the indices (zero-based positions) in the string
 * where each character is found.
 * @param {string} sentence - Sentence where to count letters
 */
const letterPositions = function(sentence) {
  // Create an empty object to store the results
  const results = {};
  // Iterate through the sentence
  for (let iCharacter = 0; iCharacter < sentence.length; iCharacter++) {
    // If the charactter is a valid letter
    if (sentence[iCharacter].match(/[a-zA-Z]/gm)) {
      // If the character exist in result object
      if (results[sentence[iCharacter]]) {
        // Push the index into the associated array
        results[sentence[iCharacter]].push(iCharacter);
        // If it does not
      } else {
        // Create the proprety in the result object and assign an array with the index of the letter
        results[sentence[iCharacter]] = [iCharacter];
      }
    }
  }
  // Return the result
  return results;
};

// TEST
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
