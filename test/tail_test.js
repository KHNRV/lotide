const _ = require("../index");
const { expect } = require("chai");

describe("tail.js", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    expect(_.tail(["Hello", "Lighthouse", "Labs"])).to.deep.equal([
      "Lighthouse",
      "Labs",
    ]);
  });
  it(`the function does not edit the source array`, () => {
    const wordsTest2 = ["Yo Yo", "Lighthouse", "Labs"];
    _.tail(wordsTest2); // no need to capture the return value since we are not checking it
    expect(wordsTest2).to.deep.equal(["Yo Yo", "Lighthouse", "Labs"]);
  });
  it(`returns [] when given an array with only one element`, () => {
    const wordsTest3 = ["Alone"];
    expect(_.tail(wordsTest3)).to.deep.equal([]);
  });
  it(`returns an empty array when given an empty array`, () => {
    const wordsTest4 = [];
    expect(_.tail(wordsTest4)).to.deep.equal([]);
  });
});
