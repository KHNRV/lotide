const _ = require("../index");
const { expect } = require("chai");

describe("countLetters.js", () => {
  it(`Returns: {
      e: 3,
      g: 1,
      h: 4,
      i: 2,
      l: 1,
      n: 1,
      o: 2,
      s: 2,
      t: 2,
      u: 2,
    } when input: "lighthouse in the house"`, () => {
    const result = _.countLetters("lighthouse in the house");
    const expected = {
      e: 3,
      g: 1,
      h: 4,
      i: 2,
      l: 1,
      n: 1,
      o: 2,
      s: 2,
      t: 2,
      u: 2,
    };
    expect(result).to.deep.equal(expected);
  });
});
