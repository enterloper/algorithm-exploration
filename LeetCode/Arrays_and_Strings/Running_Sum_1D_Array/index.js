/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => (
     nums.reduce((acc, cur, index) => {
        if (index === 0) { return [cur] }
        acc.push(acc[index - 1] + cur);
        return acc;
    }, [])
);
