class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = [];
        let n = nums.length;
        let l=0, r=n-1;
        for(let i = 0; i < nums.length;i++){
            let sum = nums[l]+ nums[r];
            if(sum > target){
                r--;
            } else if(sum<target){
                l++;
            } else{
                res = [l+1, r+1];
            }
        }
        return res;
    }
}
