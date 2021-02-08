const _ = require("../index");
const { expect } = require("chai");

describe(`findKeyByValue`, () => {
  const bestTVShowsByGenre = {
    // eslint-disable-next-line camelcase
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };
  it(`For a bestTVShowsByGenre object, returns "drama" when given "The Wire"`, () => {
    const result = _.findKeyByValue(bestTVShowsByGenre, "The Wire");
    expect(result).to.equal("drama");
  });
  it(`For a bestTVShowsByGenre object, returns undefined when given "That '70s Show"`, () => {
    const result = _.findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    expect(result).to.be.undefined;
  });
});
// //TEST
// const bestTVShowsByGenre = {
//   // eslint-disable-next-line camelcase
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
