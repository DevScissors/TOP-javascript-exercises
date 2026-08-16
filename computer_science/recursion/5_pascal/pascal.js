const pascal = function (n) {
  const currentLine = [1];
  if (n === 1) {
    return currentLine;
  }

  const prevLine = pascal(n - 1);

  prevLine.forEach((num, i) => {
    const rightNeighbor = prevLine[i + 1] !== undefined ? prevLine[i + 1] : 0;
    currentLine.push(num + rightNeighbor);
  });

  return currentLine;
};

// Do not edit below this line
module.exports = pascal;
