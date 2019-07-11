/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    const arr = s.trim().split(' ');
    return arr[arr.length-1].length;
};

const str = "a ";

console.log(lengthOfLastWord(str));
