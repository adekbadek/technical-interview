const R = require("ramda");

const makeArray = n => R.times(R.identity, n);

module.exports = {
  makeArray
};
