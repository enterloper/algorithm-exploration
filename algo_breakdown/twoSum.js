const nums = [11, 7, 15, 2], target = 9
const nums2 = [5, 2, 6, 14, 34, 64, 96, 12, 3, 10], target2 = 14;
const nums3 = [2,5,5,11], target3 = 10;

// const twoSum = (nums, target) => {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     let first = [nums.pop(), nums.length];
//     for (let j = nums.length - 1; j >= 0; j--) {
//       if (nums[j] + first[0] === target) {
//         return [j, first[1]];
//       }
//     }
//   }
// };

// const twoSum = (nums, target) => {
//   let storage = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     storage.set(nums[i], i);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     if (storage.has(complement) && storage.get(complement) !== i) {
//       return [i, storage.get(complement)];
//     }
//   }

//   throw new TypeError('provided arguments do not have a valid solution');
// }

const twoSum = (nums, target) => {
  let storage = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (storage.has(complement) && storage.get(complement) !== i) {
      return [storage.get(complement), i];
    }
    
    storage.set(nums[i], i);
  }

  throw new TypeError('provided arguments do not have a valid solution');
}
console.log(`Expect [11,7,15,2] with a target of 9 to return [1,3]: ${JSON.stringify(twoSum(nums, target))}`);
console.log(`Expect [5,2,6,14,34,64,96,12,3,10] with a target of 14 to return [1,7]: ${JSON.stringify(twoSum(nums2, target2))}`);
console.log(`Expect [25,5,11] with a target of 10 to return [1,2]: ${JSON.stringify(twoSum(nums3, target3))}`);