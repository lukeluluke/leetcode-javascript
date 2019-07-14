/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    var len = prices.length;
    if(len <= 1) return 0;
    var ret = 0;
    for(var i = 1; i < len; i++) {
        ret += Math.max(0, prices[i] - prices[i-1]);
    }
    return ret;
};



const prices = [1, 2, 3, 4, 2];

console.log(maxProfit2(prices));
