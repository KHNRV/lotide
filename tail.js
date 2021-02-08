/**
 * For a given array, returns everything except for the first item (head).
 * @param {array} inputArray - Input the array for which you wnat to return the
 * tail
 * @returns - Returns a copy of the array without the first item (head)
 */
const tail = function(inputArray) {
  return inputArray.slice(1);
};

module.exports = tail;
