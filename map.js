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
 * This function creates a new array populated with the results of calling a
 * provided function on every element in the calling array.
 * @param {array} arr - Array to map
 * @param {callback} callback - Edit parameters
 * @returns {array}
 */
const map = (arr, callback) => {
  // Create a mapedArray variable to store the modified array
  const mapedArray = [];

  // Iterate through arr and push the individual values modified my callback to
  // the mapedArray
  arr.forEach((value) => mapedArray.push(callback(value)));
  // Return mapedArray
  return mapedArray;
};

// TEST 1
const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// TEST 2
const numbers = [1, 2, 3, 4, 5];
const numbersTimeTwo = map(numbers, (value) => value * 2);
assertArraysEqual(numbersTimeTwo, [2, 4, 6, 8, 10]);

// TEST 3
const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James"];
const sayHiTo = map(names, (name) => `Hi ${name}!`);
assertArraysEqual(sayHiTo, [
  "Hi Aaran!",
  "Hi Aaren!",
  "Hi Aarez!",
  "Hi Aarman!",
  "Hi Aaron!",
  "Hi Aaron-James!",
]);
