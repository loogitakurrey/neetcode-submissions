class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let product = 1;
        let res = 0;
        let left = 0;

        for(let r = 0; r<nums.length; r++){
            product *= nums[r];
            while(left<=r && product >=k){
                product = Math.floor(product / nums[left]);
                left++;
            }
            res += r - left + 1;
        }
        return res;
    }
}
