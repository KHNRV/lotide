/**
 * This function takes in an array and return the middle-most element(s) of the
 * given array.
 * @param {array} arrayToAnalyse - Array where to find the middle element(s)
 * @returns {array} - Middle element(s) of the given array
 */
const middle = (arrayToAnalyse) => {
  // Create an array middleElements to store the elements found
  let middleElements = [];
  // If the length of arrayToAnalyse is equal or less than 2
  if (arrayToAnalyse.length <= 2) {
    // Return an empty array
    return middleElements;
    // If the length of arrayToAnalyse is even
  } else if (arrayToAnalyse.length % 2 === 0) {
    // Push the two values in the middle in middleElements
    middleElements.push(arrayToAnalyse[arrayToAnalyse.length / 2 - 1]);
    middleElements.push(arrayToAnalyse[arrayToAnalyse.length / 2]);
    // Else if the length of arrayToAnalyse is uneven
  } else if (arrayToAnalyse.length % 2 !== 0) {
    // Push the value in the middle in middleElements
    middleElements.push(arrayToAnalyse[Math.floor(arrayToAnalyse.length / 2)]);
  }
  // Return middleElements
  return middleElements;
};

module.exports = middle;
