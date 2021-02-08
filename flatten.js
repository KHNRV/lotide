/**
 * This function will take in an array containing elements including nested
 * arrays of elements, and return a "flattened" version of the array.
 * @param {array} arrayToFlatten - Array to flatten
 */
const flatten = (arrayToFlatten) => {
  // Create a variable to store the flattenArray
  let flattenArray = [];
  // Loop through the arrayToFlatten
  for (let item of arrayToFlatten) {
    // If item isArray
    if (Array.isArray(item)) {
      // Loop through the sub array
      for (let subItem of item) {
        // Push the item to flattenArray
        flattenArray.push(subItem);
      }
      // Else
    } else {
      // Push the item to flattenArray
      flattenArray.push(item);
    }
  }
  return flattenArray;
};

module.exports = flatten;
