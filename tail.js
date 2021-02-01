const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * For a given array, returns everything except for the first item (head).
 * @param {array} inputArray - Input the array for which you wnat to return the
 * tail
 * @returns - Returns a copy of the array without the first item (head)
 */
const tail = function(inputArray) {
  return inputArray.slice(1);
};

// TESTS

// Test Case 1: Check the returned array elements
const resultTest1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(resultTest1.length, 2); // ensure we get back two elements
assertEqual(resultTest1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(resultTest1[1], "Labs"); // ensure second element is "Labs"

// Test Case 2 : Check the original array
const wordsTest2 = ["Yo Yo", "Lighthouse", "Labs"];
tail(wordsTest2); // no need to capture the return value since we are not checking it
assertEqual(wordsTest2.length, 3); // original array should still have 3 elements!

// Test Case 3 : An array with only one element should yield an empty array for
//its tail
const wordsTest3 = ["Alone"];
assertEqual(tail(wordsTest3).length, 0);

// Test Case 4 : An empty array should yield an empty array for its tail
const wordsTest4 = [];
assertEqual(tail(wordsTest4).length, 0);
