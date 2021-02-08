const eqObjects = require("./eqObjects");

/**
 * This function compares two objects and print out if they match or not
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

module.exports = assertObjectsEqual;
