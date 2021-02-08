/**
 * This function returns all the indices (zero-based positions) in the string
 * where each character is found.
 * @param {string} sentence - Sentence where to count letters
 */
const letterPositions = function(sentence) {
  // Create an empty object to store the results
  const results = {};
  // Iterate through the sentence
  for (let iCharacter = 0; iCharacter < sentence.length; iCharacter++) {
    // If the charactter is a valid letter
    if (sentence[iCharacter].match(/[a-zA-Z]/gm)) {
      // If the character exist in result object
      if (results[sentence[iCharacter]]) {
        // Push the index into the associated array
        results[sentence[iCharacter]].push(iCharacter);
        // If it does not
      } else {
        // Create the proprety in the result object and assign an array with the index of the letter
        results[sentence[iCharacter]] = [iCharacter];
      }
    }
  }
  // Return the result
  return results;
};

module.exports = letterPositions;
