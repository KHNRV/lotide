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
 * Function, given an array and an object, return an object containing counts of
 * everything that the input object listed.
 * @param {array} allItems - an array of strings that we need to look through
 * @param {object} itemsToCount - an object specifying what to count
 */
const countOnly = function(allItems, itemsToCount) {
  // Define an object countedItems
  const countedItems = {};
  // Iterate through allItems
  for (const item of allItems) {
    // If one proprety of item is true in itemsToCount
    if (itemsToCount[item]) {
      // If item exist in countedItems
      if (countedItems[item]) {
        // increment its count by 1
        countedItems[item]++;
        // Otherwise, create the item and give it a value of 1
      } else {
        countedItems[item] = 1;
      }
    }
  }
  // Return countedItems
  return countedItems;
};

// TEST
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
