const tail = require("../tail");
const assert = require("chai").assert;

describe("tail.js", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it(`the function does not edit the source array`, () => {
    const wordsTest2 = ["Yo Yo", "Lighthouse", "Labs"];
    tail(wordsTest2); // no need to capture the return value since we are not checking it
    assert.deepEqual(wordsTest2, ["Yo Yo", "Lighthouse", "Labs"]);
  });
  it(`returns [] when given an array with only one element`, () => {
    const wordsTest3 = ["Alone"];
    assert.deepEqual(tail(wordsTest3), []);
  });
  it(`returns an empty array when given an empty array`, () => {
    const wordsTest4 = [];
    assert.deepEqual(tail(wordsTest4), []);
  });
});
