class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
         let n = nums.length;
            let slow = 0;
            for(let fast = 0; fast <n ; fast++){
                if(nums[fast] != val){
                    nums[slow] = nums[fast];
                    slow++
                }
            }
            return slow;
    }
}
