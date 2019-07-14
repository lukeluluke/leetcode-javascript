function generalizedGCD(num, arr)
{
    let gcd = Math.min(...arr);
    let next = false;
    while(!next) {
        next = arr.every(function (n) {
            return n%gcd ===0;
        });
        if (!next) {
            gcd --;
        }
    }

    return gcd;
}

const nums = [2, 4, 6, 8, 10];

console.log(generalizedGCD(5, nums));
