/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = function (s1, s2, s3) {
    const len1 = s1.length
    const len2 = s2.length
    const len3 = s3.length
    if (len1 + len2 !== len3) {
        return false
    }
    if (len1 <= 0) {
        return s2 === s3
    }
    if (len2 <= 0) {
        return s1 === s3
    }

    const dp = []
    for (let i = 0; i <= len1; i++) {
        for (let j = 0; j <= len2; j++) {
            dp[j] = (i <= 0 || dp[j]) && s1[i - 1] === s3[i + j - 1] ||
                (j <= 0 || dp[j - 1]) && s2[j - 1] === s3[i + j - 1];

            console.log(dp);
        }
    }
    return dp[len2]
};


const s1 = 'aabcc';
const s2 = 'dbbca';
const s3 = 'aadbbcbcac';

console.log(isInterleave(s1, s2, s3));
