class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;
        const seen = new Array(n).fill(false);

        for (const num of nums) {
            if (num > 0 && num <= n) {
                seen[num - 1] = true;
            }
        }

        for (let i = 0; i < n; i++) {
            if (!seen[i]) {
                return i + 1;
            }
        }

        return n + 1;}
}
