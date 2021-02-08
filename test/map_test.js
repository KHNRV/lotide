const _ = require("../index");
const { expect } = require("chai");

describe(`map`, () => {
  it(`Returns the first character of an array of strings when given: (arrayOfWord, (word) => word[0])`, () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = _.map(words, (word) => word[0]);
    expect(result).to.deep.equal(["g", "c", "t", "m", "t"]);
  });
  it(`Returns [2, 4, 6, 8, 10] when given: ([1, 2, 3, 4, 5], (value) => value * 2)`, () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = _.map(numbers, (value) => value * 2);
    expect(result).to.deep.equal([2, 4, 6, 8, 10]);
  });
  it(`Returns an array of strings saying "Hi ${"${name}"} when given: (arrayOfNames, (name) => ${"`Hi ${name}!`"})`, () => {
    const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James"];
    const result = _.map(names, (name) => `Hi ${name}!`);
    expect(result).to.deep.equal([
      "Hi Aaran!",
      "Hi Aaren!",
      "Hi Aarez!",
      "Hi Aarman!",
      "Hi Aaron!",
      "Hi Aaron-James!",
    ]);
  });
});

// // TEST 2

// // TEST 3
