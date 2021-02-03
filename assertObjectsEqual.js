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
 * This function takes in two objects and returns true or false, based on a
 * perfect match.
 * @param {object} object1
 * @param {object} object2
 * @returns True if both objects have identical keys with identical values.
 * Otherwise you get back a big fat false!
 */
const eqObjects = (object1, object2) => {
  // Store the keys of object1 and object2 in keysObject1 and keysObject2
  const keysObject1 = Object.keys(object1).sort();
  const keysObject2 = Object.keys(object2).sort();
  // If the two objects have the same amount of keys with the same names
  if (eqArrays(keysObject1, keysObject2)) {
    // Loop through the object keys
    for (const key of keysObject1) {
      // if both values or an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // Compare them and return false if they do not match
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
        // Otherwise
      } else {
        // Compare the values related to the keys individualy
        if (object1[key] !== object2[key]) {
          // If they don't match, return false
          return false;
        }
      }
    }
    // If they all match
    return true;
    // If two objects don't have the same amount of keys with the same names
  } else {
    // Return false
    return false;
  }
};

/**
 * Compare two objects and print out if they match or not
 * @param {*} actual Enter the object to test
 * @param {*} expected Enter the expected object
 */
const assertObjectsEqual = (actual, expected) => {
  // Import util library
  const inspect = require("util").inspect;
  // If the objects match
  if (eqObjects(actual, expected)) {
    // Print success
    console.log(
      `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
    // Otherwise
  } else {
    // Print Failure
    console.log(
      `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { c: 1, b: 2, a: 3 });
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 3, b: 2, c: 1 });
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { c: 3, b: 2, a: 1 });
// assertObjectsEqual({"1", "2", "3"}, {"1", "2", 3});
