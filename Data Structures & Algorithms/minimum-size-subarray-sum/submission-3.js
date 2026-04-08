class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let n = nums.length;
        let minLen = Infinity;
        let left = 0;
        let curSum =0;

        for(let right = 0; right < n; right++){
            curSum += nums[right];

            while(curSum >= target){
                minLen = Math.min(minLen, right-left+1);
                curSum -= nums[left];
                left++;
            }
        }
        return minLen === Infinity ? 0 : minLen;
    }
}
