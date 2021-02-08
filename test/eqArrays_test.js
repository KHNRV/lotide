const _ = require("../index");
const { expect } = require("chai");

describe(`eqArrays`, () => {
  it(`Returns true when comparing [1, 2, 3] to [1, 2, 3]`, () => {
    expect(_.eqArrays([1, 2, 3], [1, 2, 3])).to.be.true;
  });
  it(`Returns false when comparing [1, 2, 3] to [3, 2, 1]`, () => {
    expect(_.eqArrays([1, 2, 3], [3, 2, 1])).to.be.false;
  });
  it(`Returns true when comparing ["1", "2", "3"] to ["1", "2", "3"]`, () => {
    expect(_.eqArrays(["1", "2", "3"], ["1", "2", "3"])).to.be.true;
  });
  it(`Returns false when comparing ["1", "2", "3"] to ["1", "2", 3]`, () => {
    expect(_.eqArrays(["1", "2", "3"], ["1", "2", 3])).to.be.false;
  });
});
