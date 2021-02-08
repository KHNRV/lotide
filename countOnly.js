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
    // If one propriety of item is true in itemsToCount
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

module.exports = countOnly;
