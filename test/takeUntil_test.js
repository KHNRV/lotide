const _ = require("../index");
const { expect } = require("chai");

describe(`takeUntil`, () => {
  it(`Returns [1, 5, 34, 76, 345, 34] when given: 
  ([1, 5, 34, 76, 345, 34, 546, 345654, 13, 1], 
  (value) => value > 500) )`, () => {
    const numbers = [1, 5, 34, 76, 345, 34, 546, 345654, 13, 1];
    const result = _.takeUntil(numbers, (value) => value > 500);
    expect(result).to.deep.equal([1, 5, 34, 76, 345, 34]);
  });
});
