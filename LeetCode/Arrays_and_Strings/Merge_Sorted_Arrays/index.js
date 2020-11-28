/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const slicedNums1 = nums1.slice(0, m);
    const slicedNums2 = nums2.slice(0, n);
    let index = 0;
    while (slicedNums1.length && slicedNums2.length) {
      if (slicedNums1[0] <= slicedNums2[0]) {
        nums1[index] = slicedNums1[0];
        slicedNums1.splice(0, 1);
        index++;
      } else {
        nums1[index] = slicedNums2[0];
        slicedNums2.splice(0, 1);
        index++;
      }
    }
    if (slicedNums1.length) {
      for (let i = 0; i < slicedNums1.length; i++) {
        nums1[index] = slicedNums1[i];
        index++;
      }
    } else if (slicedNums2.length) {
      for (let i = 0; i < slicedNums2.length; i++) {
        nums1[index] = slicedNums2[i];
        index++;
      }
    }
};

const nums1 = [1,2,3,0,0,0], 
m = 3,
nums2 = [2,5,6],       
n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);