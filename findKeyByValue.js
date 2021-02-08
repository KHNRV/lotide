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

module.exports = findKeyByValue;
