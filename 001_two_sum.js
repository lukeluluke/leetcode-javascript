const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = function (nums, target) {
    let result = {};
    for (let i = 0; i< nums.length; i++) {
        if (result[nums[i]] !== undefined) {
            return [result[nums[i]], i];
        } else {
            result[target-nums[i]] = i;
        }
    }
};

const a =  twoSum(nums, target);
console.log(a);
