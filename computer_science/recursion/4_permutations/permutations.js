const permutations = function (arr) {
  if (arr.length === 0) {
    return [[]];
  }

  let results = [];

  let splitArr = arr.slice(1);
  let perms = permutations(splitArr);

  for (let perm of perms) {
    results.push(...insertToAllPlaces(arr[0], perm));
  }

  return results;
};

function insertToAllPlaces(element, arr) {
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
