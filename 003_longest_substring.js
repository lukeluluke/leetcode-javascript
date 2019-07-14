/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    const visitedChars = {};
    let len = 0;
    let index = 0;
    for (let i =0 ; i<s.length; i++) {
        if (s[i] in visitedChars) {
            len = Math.max(len, i-index);
            index = Math.max(index,  visitedChars[s[i]]+1);
        }
        visitedChars[s[i]] = i;
    }

    return Math.max(len, s.length - index);
};
