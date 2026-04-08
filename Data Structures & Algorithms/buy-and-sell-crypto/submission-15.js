class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let sell = 1;
        let max = 0;
        
        while(sell < prices.length){
            if(prices[buy] < prices[sell]){
                max = Math.max((prices[sell] - prices[buy]), max);
            } else {
                buy = sell;
            }
            sell +=1;
        }
        return max;
    }
}
