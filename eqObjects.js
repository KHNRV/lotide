const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;
