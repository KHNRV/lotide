const assertEqual = require("./assertEqual");

/**
 * Output the value at index 0 of a given array
 * @param {array} inputArray - Input an array to find its head
 * @returns {*} Value at index 0 of the input array
 */
const head = function(inputArray) {
  return inputArray[0];
};

module.exports = head;
