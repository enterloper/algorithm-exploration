const twoSum = (nums, target) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        let first = [nums.pop(), nums.length];
        for (let j = nums.length - 1; j >= 0; j--) {
        if (nums[j] + first[0] === target) {
            return [j, first[1]];
        }
        }
    }
};