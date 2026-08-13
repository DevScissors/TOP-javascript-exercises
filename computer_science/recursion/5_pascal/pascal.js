const pascal = function (n) {
  if (n < 2) {
    return [1];
  }

  let results = [1, 1];
  let tempArr = [...results];
  let tempTotal = 0;

  // n = 3
  // [1]
  // [0+1, 1+0] -> [1, 1]
  // [0+1, 1+1, 1+0] -> [1, 2, 1]
  // [0+1, 2+1, 1+2, 1] ->  [1, 3, 3, 1]

  for (let i = 1; i < n; i++) {
    results[1] = calculateMiddleNum(tempArr);
  }

  function calculateMiddleNum(arr) {
    for (const num of arr) {
      tempTotal += num;
    }
    return tempTotal;
  }
};

pascal(3);

// Do not edit below this line
module.exports = pascal;
