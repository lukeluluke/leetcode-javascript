
const getLongestCommonPre = function (arr) {
    let result = '';
    for (let i = 0; i<arr[0].length; i++) {
        const char = arr[0][i];
        if (charInString(char, arr, i)) {
            result += char;
        } else {
            return result;
        }
    }
};

function charInString(char, arr, index) {
    let include = true;
    for(let j = 1; j< arr.length; j++) {
        if (arr[j][index] === undefined || arr[j][index] !== char) {
            include = false;
        }
    }

    return include;
}

const arr = ["fslower","flow","flight"];

const result = getLongestCommonPre(arr);
console.log(result);
