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
 * This function take in a source array and a itemsToRemove array. It return a
 * new array with only those elements from source that are not present in the
 * itemsToRemove array.
 * @param {array} arrayToEdit - Array where to remove element from
 * @param {array} itemsToRemove - Array of elements to remove from the
 * arrayToEdit
 * @returns {array} New array with only those elements from source that are not
 * present in the itemsToRemove array
 */
const without = (arrayToEdit, itemsToRemove) => {
  // Create a copy of the original array
  let copyArrayToEdit = [...arrayToEdit];
  // Loop through all the items of itemsToRemove
  for (let itemToRemove of itemsToRemove) {
    // While the itemToRemove exists in the arrayToEdit
    while (copyArrayToEdit.includes(itemToRemove)) {
      // Splice (remove) one iteration of the item from arrayToEdit
      copyArrayToEdit.splice(copyArrayToEdit.indexOf(itemToRemove), 1);
    }
  }
  // Return the edited copy of arrayToEdit
  return copyArrayToEdit;
};

module.exports = without;

// TEST
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
