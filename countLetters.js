/**
 * Compare two value and print out if they match or not
 * @param {*} actual - Enter the variable to test
 * @param {*} expected - Enter the expected value of the variable
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * This function takes in a sentence (as a string) and then return a count of
 * each of the letters in that sentence.
 * @param {string} stringToCount - Sentece to count (only alphbetical characters
 * will be counted)
 */
const countLetters = (stringToCount) => {
  // Create lettersToCount, a copy of stringToCount with only letters
  const lettersToCount = stringToCount.replace(/[^a-zA-Z]/gm, "");
  // Create an object letterCount to keep the count
  const letterCount = {};
  // Iterate through every letter of lettersToCount
  for (const letter of lettersToCount) {
    // If the letter exist in letterCount
    if (letterCount[letter]) {
      // Increment its count by 1
      letterCount[letter]++;
      // Otherwise
    } else {
      // Create the letter prorpety into letterCount and give it a value of 1
      letterCount[letter] = 1;
    }
  }
  // Return letterCount
  return letterCount;
};

module.exports = countLetters;

assertEqual(countLetters("lighthouse in the house").l, 1);
assertEqual(countLetters("lighthouse in the house").i, 2);
assertEqual(countLetters("lighthouse in the house").g, 1);
assertEqual(countLetters("lighthouse in the house").h, 4);
assertEqual(countLetters("lighthouse in the house").e, 3);
assertEqual(countLetters("lighthouse in the house").z, undefined);
