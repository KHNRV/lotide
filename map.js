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

module.exports = map;
