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
 * This function scan a given object and return the first key which contains the
 * given value. If no key with that given value is found, then it should return
 * undefined.
 * @param {object} objectToSearch
 * @param {*} valueToFind
 */
const findKeyByValue = (objectToSearch, valueToFind) => {
  // Iterate through every key of the object
  for (const key of Object.keys(objectToSearch)) {
    // If the value associated to the key is equal to valueToFind
    if (objectToSearch[key] === valueToFind) {
      // Return key
      return key;
    }
  }
};

//TEST
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
