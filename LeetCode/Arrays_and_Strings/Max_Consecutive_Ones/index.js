/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let highestCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            count++;
            if (highestCount < count) {
                highestCount = count;
            }
        }
        else {
            count =0;
        }
    }
    return highestCount;
};
