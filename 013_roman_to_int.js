const romanKeys = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};


const convertRoman = function (romanStr) {
    let result = 0;
    let lastDigit = Infinity;
    for (let i = 0; i< romanStr.length; i++) {
        const digit = romanKeys[romanStr[i]];
        if (digit <= lastDigit) {
            result += digit
        } else {
            result += digit - lastDigit*2;
        }
        lastDigit = digit
    }
    return result;
};

const result = convertRoman('MCMXCIV');

console.log(result);
