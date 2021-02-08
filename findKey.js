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

module.exports = findKey;
