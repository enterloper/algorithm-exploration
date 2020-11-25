/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let storage = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        storage.slice(i);
    }
  }
};
const array = [1,0,2,3,0,4,5,0]
            //[1,0,0,2,3,0,0,4]
duplicateZeros(array);
console.log(array);