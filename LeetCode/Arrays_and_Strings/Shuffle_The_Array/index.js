const testCases = [
    {
        n: 3,
        input: [2,5,1,3,4,7],
        output: [2,3,5,4,1,7]
    },
    {
        n: 4,
        input: [1,2,3,4,5,4,3,2,1],
        output: [1,5,2,4,3,3,4,2,1]
    },
    {
        n: 2,
        input: [1,1,2,2],
        output: [1,2,1,2]
    }
];

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

const shuffle = (nums, n) => {
    const firstHalf = nums.splice(0, n)
    let numLength = nums.length;
    let firstHalfLength = firstHalf.length;
    const output = [];
    let i = 0;

    while (numLength && firstHalfLength) {
        output.push(firstHalf[i], nums[i]);
        numLength--;
        firstHalfLength--;
        i++;
    }
    if(nums[i]) {
        output.push(nums[i]);
    };
    return output;
}

// ALTERNATE

var shuffle2 = function(nums, n) {
    let alt_nums = [];
    for(i = 0; i < n; i++){
        alt_nums.push(nums[i]);
        alt_nums.push(nums[i+n]);
    }
    return alt_nums;
};
testCases.forEach(({input, n, output}) => {
    console.log(JSON.stringify(shuffle(input, n)) === JSON.stringify(output));
})