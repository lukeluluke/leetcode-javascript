/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome1 = function(s) {
    function isPalindromic(subStr) {
        return (subStr === subStr.split('').reverse().join(''));
    }

    let maxStr = s[0];
    let maxLen = 0;
    for (let i = 0; i<s.length; i++) {
        const next = s.substring(i+1).lastIndexOf(s[i]);
        if (next !== -1) {
            const len = i + next +2;
            const subStr = s.substring(i, len);
            if (isPalindromic(subStr)) {
                const len = subStr.length;
                if (len > maxLen) {
                    maxStr = subStr;
                    maxLen = len;
                }
            }
        }
    }

    return s ? maxStr : '';
};

const longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s;
    }

    const str = '#' + s.split('').join('#') + '#';
    let max = 1;
    let left = 0;
    let right = 1;
    let subStr = '';
    for (let i = 0; i<str.length;i++) {
        left = i-1;
        right = i+1;
        let sub = str[i];
        while (left >= 0 && right < str.length){
            if (str[left] === str[right]) {
                sub = (str[left] + sub + str[right]);
                left --;
                right ++;
            } else {
                break;
            }
        }

        const newLen = sub.replace('#', '').length;

        if (newLen > max) {
            subStr = sub;
            max = newLen;
        }
    }

    return  subStr.replace(/#/g, '');
};


var longestPalindrome3 = function(s) {
    let oddStarts = []  // length of 3
    let evenStarts = [] // length of 2
    for (let i =0; i<s.length-1; i++){
        if (s[i]==s[i+1]){
            evenStarts.push([i,i+1])
        }
        if (s[i+2]!==undefined && s[i]==s[i+2]){
            oddStarts.push([i,i+2])
        }
    }
    let allStarts = oddStarts.concat(evenStarts)
    let max = 1
    let maxindex = [0,1]
    let left;
    let right;
    for (let allstarts of allStarts){

        left=allstarts[0]
        right = allstarts[1]
        left--
        right++

        while (left>=0 && right<= s.length-1){

            if(s[left]===s[right]){
                left--
                right++
            }
            else {
                break
            }
        }
        if (right-left-1>max){
            max = right-left-2
            maxindex = [left+1,right]
        }
    }
    return s.slice(maxindex[0],maxindex[1])
}


const str = 'cbbd';

console.log(longestPalindrome3(str));
