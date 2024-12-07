/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const mul = (a, b) => {
  return a * b;
};

// module.exports.add = add;
// module.exports.mul = mul;

MediaSourceHandle.exports = {
  add,
  mul,
  sub,
  div,
};
