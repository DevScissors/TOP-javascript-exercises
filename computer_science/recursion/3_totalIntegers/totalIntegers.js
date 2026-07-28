const totalIntegers = function (value) {
  let totalIntCount = 0;
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    const objValuesArr = Object.values(value);
    totalIntegers(objValuesArr);
  } else {
    for (const item of value) {
      if (typeof item === "number") {
        totalIntCount++;
      }
      if (typeof item === "object" && item !== null) {
        totalIntegers(item);
      }
    }
  }
  return totalIntCount;
};

// totalIntegers({ a: 1, b: "2", c: 3 }); // 2
// totalIntegers([1, 2, "3", 4]); // 3
totalIntegers([[[[[[[[[[[[[[4]]]]]], 246]]]]]]]]); // 2

// Do not edit below this line
module.exports = totalIntegers;
