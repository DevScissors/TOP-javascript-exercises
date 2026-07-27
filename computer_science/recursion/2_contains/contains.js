const contains = function (tree, targetValue) {
  for (const key in tree) {
    const value = tree[key];
    if (Object.is(value, targetValue)) {
      return true;
    }
    if (typeof value === "object" && value !== null) {
      const result = contains(value, targetValue);

      if (result) {
        return true;
      }
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
