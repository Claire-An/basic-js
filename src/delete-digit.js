const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const arrN = n.toString().split('');
  for(let i = 0; i < arrN.length; i += 1) {
    const arrNew = Array.from(arrN);
    arrNew.splice(i, 1);
    number = +arrNew.join('');
    if (max < number) max = number;
  }
  return max;
}

module.exports = {
  deleteDigit
};
