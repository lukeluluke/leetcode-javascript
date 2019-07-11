/**
 * //todo Hard
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let max = nums[0];
    let total = nums[0];
    for (let i = 1; i<nums.length; i ++) {
        total = Math.max(nums[i],  total + nums[i]);
        max = Math.max(max, total);
        console.log(total + ' | ' + max);
    }

    return max;
};

const maxSubArray2 = function(nums) {
    let max = nums[0];
    let total = nums[0];
    const result = [nums[0]];

    for (let i = 1; i<nums.length; i ++) {
    }

    return max;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums));
