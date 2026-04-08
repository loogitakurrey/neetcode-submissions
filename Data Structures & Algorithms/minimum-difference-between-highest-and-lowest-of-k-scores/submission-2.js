class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);
        let left = 0;
        let res = Infinity;
        let right = k-1;
        while(right < nums.length){
            res = Math.min(res, nums[right] - nums[left]);
            left++;
            right++;
        }
        return res;
    }
}
