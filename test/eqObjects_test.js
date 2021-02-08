const _ = require("../index");
const { expect } = require("chai");

describe(`eqObjects`, () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  it(`Returns true when given:
  { a: "1", b: "2" }
  and
  { b: "2", a: "1" }
  
  `, () => {
    expect(_.eqObjects(ab, ba)).to.be.true;
  });
  it(`Returns false when given:
  { a: "1", b: "2" }
  and
  { a: "1", b: "2", c: "3" }
  
  `, () => {
    expect(_.eqObjects(ab, abc)).to.be.false;
  });
  it(`Returns true when given:
  { c: "1", d: ["2", 3] }
  and
  { d: ["2", 3], c: "1" }
  
  `, () => {
    expect(_.eqObjects(cd, dc)).to.be.true;
  });
  it(`Returns false when given:
  { c: "1", d: ["2", 3] }
  and
  { c: "1", d: ["2", 3, 4] }
  `, () => {
    expect(_.eqObjects(cd, cd2)).to.be.false;
  });
});

// assertEqual(eqObjects(ab, ba), true);

// assertEqual(eqObjects(ab, abc), false);

// assertEqual(eqObjects(cd, dc), true);

// assertEqual(eqObjects(cd, cd2), false);
