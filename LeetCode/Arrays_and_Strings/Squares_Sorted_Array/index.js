/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(x => x * x).sort((a,b) => a < b ? -1 : a > b ? 1 : 0);  
};


console.log(sortedSquares([-4,-1,0,3,10]));