let Calculator = require("./calculator.js");

describe("calculator", () => {
  let Calc;
  let num = null;
  let num2 = null;
  beforeEach(() => {
    Calc = new Calculator(2, 5);
  });

  test("returns addition", () => {
    expect(Calc.add(2, 5)).toBe(7);
    //expect(Calc.add(2, 5)).toBe(number);
    expect(Calc.add(num, num2)).not.toBeNull();
  });

  test("returns substraction", () => {
    expect(Calc.subtract(4, 3)).toBe(1);
  });

  test("returns multiplication", () => {
    expect(Calc.multiply(3, 4)).toBe(12);
  });

  test("returns division", () => {
    expect(Calc.division(4, 2)).toBe(2);
  });
});
