/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0], maxDp = 0
    for(let i=1 ;i<prices.length; i++){
        minPrice = Math.min(prices[i], minPrice)
        maxDp = Math.max(maxDp, prices[i]- minPrice)
    }
    return maxDp
};