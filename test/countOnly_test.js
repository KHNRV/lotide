const _ = require("../index");
const { expect } = require("chai");

describe(`countOnly.js`, () => {
  it(`Returns: { Jason: 1, Fang: 2 } when given the array:
  [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];

  and the object:
  {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  }
  `, () => {
    const list = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    const param = {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    };

    const expected = { Jason: 1, Fang: 2 };

    const result = _.countOnly(list, param);

    expect(result).to.deep.equal(expected);
  });
});
