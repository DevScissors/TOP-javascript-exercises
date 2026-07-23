const tree = {
  data: {
    duplicate: "e",
    stuff: {
      thing: {
        banana: NaN,
        moreStuff: {
          something: "foo",
          answer: "test",
        },
      },
    },
    info: {
      duplicate: "e",
      magicNumber: 44,
      empty: null,
    },
  },
};

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

contains(tree, 44);

// Do not edit below this line
module.exports = contains;
