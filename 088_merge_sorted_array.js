/**
 * a = b--, assign b'value to a, and b minutes 1
 * a = --b, b minutes 1 firstly, and then assign value to a
 */

const merge = function(nums1, m, nums2, n) {
    let len = (m--) + (n--);
    while (n >= 0) {
        nums1[--len] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--];
    }
};



const nums1 = [1,2,3];
const nums2 = [2,5,6];

const m = 3;
const n = 3;
merge(nums1, m,  nums2, n);

console.log(nums1);
