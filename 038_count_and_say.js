const countAndSay = function (n) {
    let str = '1';
    while (n > 1) {
        let num = 1;
        let temp = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i+1]) {
                num ++;
            } else{
                temp += (num + '' + str[i]);
                num = 1;
            }
        }

        str = temp;
        n--;
    }

    return str;
};

console.log(countAndSay(10));
