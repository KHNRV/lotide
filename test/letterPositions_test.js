const _ = require("../index");
const { expect } = require("chai");

describe(`letterPositions`, () => {
  it(`Returns: {h: [0], e: [1], l: [2, 3], o: [4]} when given "hello"`, () => {
    const result = _.letterPositions("hello");
    expect(result).to.deep.equal({ h: [0], e: [1], l: [2, 3], o: [4] });
  });
});
