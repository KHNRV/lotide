const { it } = require("mocha");
const _ = require("../index");
const { expect } = require("chai");

describe("head.js", () => {
  it("returns 1 for [1, 2, 3]", () => {
    expect(_.head([1, 2, 3])).to.equal(1);
  });
  it(`returns 5 for [5, 6, 7]`, () => {
    expect(_.head([5, 6, 7])).to.equal(5);
  });
  it(`returns Hello for ["Hello", "Lighthouse", "Labs"]`, () => {
    expect(_.head(["Hello", "Lighthouse", "Labs"])).to.equal("Hello");
  });
  it(`returns undefined for []`, () => {
    expect(_.head([])).to.equal(undefined);
  });
  it(`returns 1 for [1]`, () => {
    expect(_.head([1])).to.equal(1);
  });
});
