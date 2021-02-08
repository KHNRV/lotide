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
 * Function that takes in two arrays and returns true or false, based on a
 * perfect match.
 * @param {array} firstArray -
 * @param {array} secondArray -
 * @returns {boolean} Return whether the arrays or identical
 */
const eqArrays = (firstArray, secondArray) => {
  // Compare the length of the arrays.
  if (firstArray.length === secondArray.length) {
    // Compare every items of the arrays idividually. Return false at the first no match.
    for (let index in firstArray) {
      if (firstArray[index] !== secondArray[index]) {
        return false;
      }
    }
  } else {
    // Return false if no match
    return false;
  }
  // Return true if every comparison were a match
  return true;
};

/**
 * This function takes in two objects and returns true or false, based on a
 * perfect match.
 * @param {object} object1
 * @param {object} object2
 * @returns True if both objects have identical keys with identical values.
 * Otherwise you get back a big fat false!
 */
const eqObjects = (object1, object2) => {
  console.log("object1:", object1);
  console.log("object2:", object2);
  // Define isEqual
  let isEqual = 0;
  // Store the keys of object1 and object2 in keysObject1 and keysObject2
  const keysObject1 = Object.keys(object1).sort();
  const keysObject2 = Object.keys(object2).sort();
  // If the two objects have the same amount of keys with the same names
  if (eqArrays(keysObject1, keysObject2)) {
    // Loop through the object keys
    for (const key of keysObject1) {
      // if both values are an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // Compare them and return false if they do not match
        if (!eqArrays(object1[key], object2[key])) {
          isEqual += false;
        }
        // if both values are objects
      } else if (
        typeof object1[key] === "object" &&
        typeof object2[key] === "object"
      ) {
        isEqual += eqObjects(object1[key], object2[key]);
        // Otherwise
      } else {
        // Compare the values related to the keys individualy
        if (object1[key] !== object2[key]) {
          // If they don't match, return false
          isEqual += 1;
        }
      }
    }
  }
  if (isEqual === 0) {
    return true;
  } else {
    return false;
  }
};

const runTest = () => {
  console.log(`
  ------------------------------
  ------------------------------
  ----- TEST: eqObjects.js -----
  ------------------------------
  ------------------------------
  `);

  console.log(`
  ------------------
  ----- TEST 1 -----
  ------------------`);
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba), true);

  console.log(`
  ------------------
  ----- TEST 2 -----
  ------------------`);
  const abc = { a: "1", b: "2", c: "3" };
  assertEqual(eqObjects(ab, abc), false);

  console.log(`
  ------------------
  ----- TEST 3 -----
  ------------------`);
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertEqual(eqObjects(cd, dc), true);

  console.log(`
  ------------------
  ----- TEST 4 -----
  ------------------`);
  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual(eqObjects(cd, cd2), false);

  console.log(`
  ------------------
  ----- TEST 5 -----
  ------------------`);
  const ob1 = { c: { a: 1, b: 2 }, b: 2 };
  const ob2 = { b: 2, c: { a: 1, b: 2 } };
  assertEqual(eqObjects(ob1, ob2), true);

  console.log(`
  ------------------
  ----- TEST 6 -----
  ------------------`);
  const ob3 = {
    c: { a: 1, b: 2, c: { a: 1, b: { a: 1, b: { a: 1 } } } },
    b: 2,
  };
  const ob4 = {
    b: 2,
    c: { a: 1, b: 2, c: { a: 1, b: { a: 1, b: { a: 1 } } } },
  };

  assertEqual(eqObjects(ob3, ob4), true);

  console.log(`
  ------------------
  ----- TEST 7 -----
  ------------------`);
  assertEqual(
    eqObjects(
      { a: { z: 1 }, b: [{ z: { tyu: 4 } }] },
      { a: { z: 1 }, b: [{ z: 4 }] }
    ),
    true
  ); // => true

  console.log(`
  ------------------
  ----- TEST 8 -----
  ------------------`);
  assertEqual(
    eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
    false
  ); // => false
  console.log(`
  ------------------
  ----- TEST 9 -----
  ------------------`);
  assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
};

runTest();
