const fibs = (n) => {
  const results = [0, 1];
  for (let i = 2; i <= n; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }
  return results;
};

const fibsRec = (n) => {
  if (n === 0) {
    return [0];
  }

  if (n === 1) {
    return [0, 1];
  }

  const sequence = fibsRec(n - 1);
  const nextValue =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextValue);
  return sequence;
};

module.exports = { fibs, fibsRec };
