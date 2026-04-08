class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = [];
        console.log(nums.length-1);
        for(let i = 0; i < nums.length;i++){
            for(let j = i+1; j< nums.length; j++){
                if(nums[i]+ nums[j] === target){
                    res = [i+1, j+1];
                }
            }
        }
        return res;
    }
}
