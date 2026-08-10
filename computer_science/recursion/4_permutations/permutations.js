const permutations = function (arr) {
  if (arr.length <= 1) {
    return [arr];
  }

  if (arr.length === 2) {
    return [
      [arr[0], arr[1]],
      [arr[1], arr[0]],
    ];
  }

  let results = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let splitArr = arr.slice(1);
    if (splitArr.length >= 3) {
      permutations(splitArr);
    }
    let resultArr = insertToAllPlaces(arr[0], splitArr);
    splitArr.reverse();
    newArr = insertToAllPlaces(arr[0], splitArr);
    results.push(...resultArr, ...newArr);
  }

  return results;
};

function insertToAllPlaces(element, arr) {
  //element is 1, arr is [2, 3]

  let insertResults = [];
  for (let i = arr.length; i >= 0; i--) {
    let tempArr = [...arr];
    tempArr.splice(i, 0, element);
    insertResults.push(tempArr);
  }
  return insertResults;
}

permutations([1, 2, 3, 4]);

// Do not edit below this line
module.exports = permutations;
