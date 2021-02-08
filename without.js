/**
 * This function take in a source array and a itemsToRemove array. It return a
 * new array with only those elements from source that are not present in the
 * itemsToRemove array.
 * @param {array} arrayToEdit - Array where to remove element from
 * @param {array} itemsToRemove - Array of elements to remove from the
 * arrayToEdit
 * @returns {array} New array with only those elements from source that are not
 * present in the itemsToRemove array
 */
const without = (arrayToEdit, itemsToRemove) => {
  // Create a copy of the original array
  let copyArrayToEdit = [...arrayToEdit];
  // Loop through all the items of itemsToRemove
  for (let itemToRemove of itemsToRemove) {
    // While the itemToRemove exists in the arrayToEdit
    while (copyArrayToEdit.includes(itemToRemove)) {
      // Splice (remove) one iteration of the item from arrayToEdit
      copyArrayToEdit.splice(copyArrayToEdit.indexOf(itemToRemove), 1);
    }
  }
  // Return the edited copy of arrayToEdit
  return copyArrayToEdit;
};

module.exports = without;
