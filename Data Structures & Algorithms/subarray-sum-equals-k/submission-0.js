class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let curSum = 0;
        let preFixSum = new Map();
        preFixSum.set(0,1);

        for(let num of nums){
            curSum += num;
            const diff = (curSum - k);
            res +=preFixSum.get(diff) || 0;
            preFixSum.set(curSum, (preFixSum.get(curSum)|| 0)+1)
        }
        return res;
    }
}
