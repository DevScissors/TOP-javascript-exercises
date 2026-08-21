const mergeSort = require("./mergesort");

describe("merge sort", () => {
  test("sorts an unsorted array", () => {
    expect(mergeSort([1, 4, 3, 9, 5])).toEqual([1, 3, 4, 5, 9]);
  });

  test("sorts an array with an odd number of values", () => {
    expect(mergeSort([7, 2, 10, 4, 1])).toEqual([1, 2, 4, 7, 10]);
  });

  test("handles duplicate values", () => {
    expect(mergeSort([4, 2, 4, 1, 2])).toEqual([1, 2, 2, 4, 4]);
  });

  test("handles already sorted and reverse-sorted arrays", () => {
    expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });

  test("handles empty and single-value arrays", () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([42])).toEqual([42]);
  });
});
