/**
 * This function takes in an object and a callback. It scans the object and
 * returns the first key for which the callback returns a truthy value. If no
 * key is found, then it returns undefined.
 * @param {object} object
 * @param {callback} callback
 */
const findKey = (object, callback) => {
  // Iterate through object
  for (const key of Object.keys(object)) {
    // Create a subObject variable to allow the callback function to access it
    let subObject = object[key];
    // If callback
    if (callback(subObject)) {
      // Return the key
      return key;
    }
  }
};

// ASSERTION FUNCTIONS
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

// TEST
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
); // => "noma"
