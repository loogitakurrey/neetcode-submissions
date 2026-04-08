class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let n = nums.length;
        let slow = 0;
        for(let fast = 0; fast<n; fast++){
            if(nums[fast] != 0){
                nums[slow] = nums[fast];
                slow++;
            }
        }
        while(slow < n){
            nums[slow] = 0;
            slow++;
        }
        return slow;
    }

}
