/**
 * This function keeps collecting items from a provided array until the callback
 * provided returns a truthy value.
 * @param {array} array
 * @param {callback} callback
 */
const takeUntil = (array, callback) => {
  // Create a result array
  const result = [];
  // Iterate through the array
  for (const value of array) {
    // If !callback
    if (!callback(value)) {
      // Push the item to the result array
      result.push(value);
    } else {
      // else, return the result array
      return result;
    }
  }
};

module.exports = takeUntil;
