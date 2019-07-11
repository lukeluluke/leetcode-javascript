const removeElement = function(nums, val) {
    for (var i = 0; i < nums.length; i += 1) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
        return nums
};

const nums = [3,2,2,3];

console.log(removeElement(nums, 3));
