/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    const len = prices.length;
    if(len <= 1) return 0;
    const profits = [];
    profits.push(0);
    let lowest = prices[0];
    for(let i = 1; i < len; i++) {
        lowest = Math.min(lowest, prices[i]);
        profits[i] = Math.max(profits[i-1], prices[i]-lowest);
    }

    console.log(profits);

    let profit = 0;
    let peak = prices[len-1];
    let max = 0;
    for (let i = len-1; i>=0; i--) {
        profit = peak - prices[i];
        peak = Math.max(prices[i], peak);
        max = Math.max(max,  profits[i] + profit);
        console.log('Price :'+prices[i] + ' | profit: ' + profit + ' | peak: ' + peak + ' | max' + max);
    }

    return max;
};

const maxProfit2 = function (prices) {
    let fstBuy = -Infinity;
    let fstSell = 0;
    let secBuy = -Infinity;
    let secSell = 0;
    for (let i = 0; i<prices.length; i ++) {
        fstBuy = Math.max(fstBuy, -prices[i]);
        fstSell = Math.max(fstSell, fstBuy + prices[i]);
        secBuy = Math.max(secBuy, fstSell - prices[i]);
        secSell = Math.max(secSell, secBuy + prices[i]);
    }

    return secSell;
};

const prices = [3,3,5,0,0,3,1,4];


console.log(maxProfit2(prices));
