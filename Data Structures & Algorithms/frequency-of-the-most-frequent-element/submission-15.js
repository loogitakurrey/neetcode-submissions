class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
         nums.sort((a, b) => a - b);
        let total = 0,
            l = 0;

        for (let r = 0; r < nums.length; r++) {
            total += nums[r];
            if (nums[r] * (r - l + 1) > total + k) {
                total -= nums[l];
                l++;
            }
        }

        return nums.length - l;
    }
}
