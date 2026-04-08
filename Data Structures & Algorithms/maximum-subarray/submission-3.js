class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0],
            currSum = 0;
        for (let i = 0; i < nums.length; i++) {
            if(currSum < 0){
                currSum = 0;
            }
            currSum += nums[i];
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }
}
