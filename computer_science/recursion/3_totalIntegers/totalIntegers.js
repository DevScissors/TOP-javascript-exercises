const totalIntegers = function (value) {
  let totalIntCount = 0;
  if (typeof value !== "object") {
    return undefined;
  }
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    value = Object.values(value);
  }
  for (const item of value) {
    if (Number.isInteger(item)) {
      totalIntCount++;
    }
    if (typeof item === "object" && item !== null) {
      totalIntCount += totalIntegers(item);
    }
  }
  return totalIntCount;
};

// Do not edit below this line
module.exports = totalIntegers;
