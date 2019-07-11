/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const needleLen = needle.length;
    const stringLen = haystack.length;
    for (let i =0; i<stringLen; i++) {
        let sub = haystack[i];
        for (let j=1; j<needleLen; j++) {
            sub += haystack[i+j];
        }

        if (sub === needle) {
            return i;
        }
    }

    return needle ? -1 : 0;
};


/**
 * This solution is much more faster
 * @param haystack
 * @param needle
 * @returns {number}
 */
const strStr2 = function (haystack, needle) {
    if(needle) {
        var match = new RegExp(needle).exec(haystack);
        return match ? match.index : -1;
    } else {
        return 0;
    }
};
