const _ = require("../index");
const { expect } = require("chai");

describe(`findKey`, () => {
  it(`Returns "noma" when given the callback "(x) => x.stars === 2"`, () => {
    const objectToSearch = {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };

    const result = _.findKey(objectToSearch, (x) => x.stars === 2);
    expect(result).to.equal("noma");
  });
});
