class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let res = 0;
        let left = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 0){
               count++;
            }
            while(count > 1){
                if(nums[left] == 0){
                    count--;
                }
                left++;
            }
            res = Math.max(res, i - left + 1);
        }

        return res;
    }
}
