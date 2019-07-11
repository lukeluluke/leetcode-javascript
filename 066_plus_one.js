/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {

    for (let i = (digits.length-1); i>=0; i--) {
        const lastDigit = digits[i];
        if (lastDigit !==9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0
        }
    }
    return  [1,...digits];
}


const num = [0];

console.log(plusOne(num));
