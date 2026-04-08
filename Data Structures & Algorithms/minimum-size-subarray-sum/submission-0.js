class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minumumSum = Infinity;
        let windowSum = 0;
        let left = 0;
        for(let r = 0; r< nums.length; r++){
            windowSum +=nums[r];
            while (windowSum >= target) {
                minumumSum = Math.min(minumumSum, r - left + 1);
                windowSum -= nums[left];
                left++;
            }
        }

        return (minumumSum === Infinity) ? 0 : minumumSum;
    }
}
