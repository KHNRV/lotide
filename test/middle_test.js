const _ = require("../index");
const { expect } = require("chai");

describe("middle.js", () => {
  it(`returns [] when given [1]`, () => {
    expect(_.middle([1])).to.deep.equal([]);
  });
  it(`returns [] when given [1, 2]`, () => {
    expect(_.middle([1, 2])).to.deep.equal([]);
  });
  it(`returns [2]when given [1, 2, 3]`, () => {
    expect(_.middle([1, 2, 3])).to.deep.equal([2]);
  });
  it(`returns [3] when given [1, 2, 3, 4, 5]`, () => {
    expect(_.middle([1, 2, 3, 4, 5])).to.deep.equal([3]);
  });
  it(`returns [2, 3] when given [1, 2, 3, 4]`, () => {
    expect(_.middle([1, 2, 3, 4])).to.deep.equal([2, 3]);
  });
  it(`returns [3, 4] when given [1, 2, 3, 4, 5, 6]`, () => {
    expect(_.middle([1, 2, 3, 4, 5, 6])).to.deep.equal([3, 4]);
  });
});
