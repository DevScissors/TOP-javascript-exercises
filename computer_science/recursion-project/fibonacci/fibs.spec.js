const { fibs, fibsRec } = require("./fibs");

(describe("fibs", () => {
  test("4th fibonacci number is 3", () => {
    expect(fibs(4)).toEqual([0, 1, 1, 2, 3]);
  });
  test("6th fibonacci number is 8", () => {
    expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  test("10th fibonacci number is 55", () => {
    expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
  test("0th fibonacci number is 0 and returns [0, 1]", () => {
    expect(fibs(0)).toEqual([0, 1]);
  });
}),
  describe("fibsRec", () => {
    test("4th fibonacci number is 3", () => {
      expect(fibsRec(4)).toEqual([0, 1, 1, 2, 3]);
    });
    test("6th fibonacci number is 8", () => {
      expect(fibsRec(6)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    });
    test("10th fibonacci number is 55", () => {
      expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });
    test("0th fibonacci number is 0", () => {
      expect(fibsRec(0)).toEqual([0]);
    });
  }));
