const _ = require("../index");
const { expect } = require("chai");

describe(`flatten.js`, () => {
  it(`Returns [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]`, () => {
    const result = _.flatten([1, 2, [3, 4], 5, [6]]);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });
});
