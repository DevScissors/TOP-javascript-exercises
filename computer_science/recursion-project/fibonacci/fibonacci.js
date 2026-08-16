const fibs = (n) => {
  const results = [0, 1];
  for (let i = 2; i <= n; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }
  return results;
};

console.log(fibs(4));
console.log(fibs(5));
console.log(fibs(8));

const fibsRec = (n) => {
  console.log("This was printed recursively");
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

console.log(fibsRec(5));
console.log(fibsRec(7));
console.log(fibsRec(9));
