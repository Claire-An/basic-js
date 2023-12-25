const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = new Array(matrix.length).fill(0).map(item => {
    return new Array(matrix[0].length).fill(0);
  });
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === true) {
        for(let k = Math.max(i-1, 0); k <= Math.min(matrix.length, i + 1); k ++) {
          for(let n = Math.max(j-1,0); n <= Math.min(matrix[i].length, j + 1); n++) {
            if (!(k == i && n == j)) {result[k][n] += 1; console.log(k, n)}
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
