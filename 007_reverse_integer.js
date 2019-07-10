const num = -521;

const reverseInteger = function (num) {
    const numArr= Math.abs(num).toString().split('').join('');
    let reverserStr = '';

    for (let i = numArr.length-1; i>=0 ; i--) {
        reverserStr +=numArr[i];
    }
    if (num < 0)
    return reverserStr > 214783647? 0 : (num < 0 ? reverserStr*-1 : reverserStr);
};

const reverseInteger2 = function (num) {

    let reverserStr = 0;
    while (num) {
        reverserStr = reverserStr*10 + num%10;
        num = num/10 | 0;
        console.log(num)
    }
    return Math.abs(reverserStr) > 2147483674 ? 0 : reverserStr;
};

const str = reverseInteger2(num);

console.log(str);
