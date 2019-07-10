const num = 1212;

const palindromeNumber = function (num) {
    const numStr = num.toString().split('').join('');
    const len = numStr.length;
    const midNum = len/2 | 0;
    for (let i = 0; i<=midNum; i++) {
        if (numStr[i] !== numStr[len-1-i]) {
            return false
        }
    }

    return true;
};


const palindromeNumber2 = function (num) {
    return num == reverse(num)
}

function reverse(num) {
    let result = 0;
    while(num) {
        result = result*10 + num%10;
        num = num/10 | 0;
    }

    return result;
}

const result = palindromeNumber2(num);
console.log(result);
