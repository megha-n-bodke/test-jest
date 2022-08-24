const { stringLength, reverseString } = require("./stringLength");

test("gives string length", () => {
  expect(stringLength("megha")).toBe(5);
});

test("returns reverse string", () => {
  expect(reverseString("megha")).toBe("ahgem");
});
