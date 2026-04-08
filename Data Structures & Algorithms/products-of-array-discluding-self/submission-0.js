class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let countZero = 0;
        let multiply = 1;
        for(let i=0; i<nums.length; i++){
            if(nums[i] == 0){
                countZero++;
            } else {
                multiply *= nums[i];
            }   
        }

        if(countZero> 1){
            return Array(nums.length).fill(0);
        }

        let res = new Array(nums.length);
        for(let i = 0 ; i < nums.length; i++){
            if(countZero > 0){
                res[i] = nums[i] === 0? multiply: 0;
            }
            else {
                res[i] = multiply/nums[i];
            }
        }
        return res;
    }
}
