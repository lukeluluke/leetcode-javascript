/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let max = 0;
    for (let i = 0; i<prices.length;i++) {
        let temp = prices;
        temp = temp.slice(i+1);
        const next = Math.max(...temp);
        if (next > prices[i]) {
            max = Math.max(max,  next - prices[i]);
        }
    }

    return max;
};

const maxProfit2 = function(prices) {
    let max = 0;
    let minPrice = prices[0];

    for (let i = 1; i<prices.length;i++) {
       max = Math.max(max,  prices[i] - minPrice);
       minPrice = Math.min(minPrice, prices[i])
    }

    return max;
};

const prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));
