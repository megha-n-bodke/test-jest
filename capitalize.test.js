const capitlize = require("./capitlize");

test("returns capitalize string", () => {
  expect(typeof "megha").toBe("string");
  expect(capitlize("megha")).toBe("Megha");
});
