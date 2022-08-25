const { stringLength, reverseString } = require("./stringLength");

test("gives string length", () => {
  expect(stringLength("m")).toBeGreaterThan(0);
  expect(stringLength("megha")).toBeLessThan(10);
});

test("returns reverse string", () => {
  expect(reverseString("megha")).toBe("ahgem");
});
