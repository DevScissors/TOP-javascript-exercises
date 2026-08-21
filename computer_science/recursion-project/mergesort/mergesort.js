const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let leftSide = arr.slice(0, arr.length / 2);
  let rightSide = arr.slice(arr.length / 2);
  leftSide = mergeSort(leftSide);
  rightSide = mergeSort(rightSide);

  let sortedArr = [];
  if (leftSide.length >= 1 && rightSide.length >= 1) {
    let leftPointer = 0;
    let rightPointer = 0;
    while (leftPointer < leftSide.length && rightPointer < rightSide.length) {
      if (leftSide[leftPointer] < rightSide[rightPointer]) {
        sortedArr.push(leftSide[leftPointer]);
        leftPointer++;
      } else {
        sortedArr.push(rightSide[rightPointer]);
        rightPointer++;
      }
    }
    sortedArr.push(...leftSide.slice(leftPointer));
    sortedArr.push(...rightSide.slice(rightPointer));
  }
  return sortedArr;
};

module.exports = mergeSort;
