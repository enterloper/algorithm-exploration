/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) continue;

    const saved = arr.slice(i);

    for (let j = 0; j < saved.length - 1; j++) {
      arr[i+j+1] = saved[j];
    }

    i++;
  }
};
// [1,0,2,3,0,4,5,0]  ---> [1,0,0,2,3,0,0,4]

