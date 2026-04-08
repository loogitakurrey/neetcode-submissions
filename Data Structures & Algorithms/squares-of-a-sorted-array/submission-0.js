class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let n = nums.length;
        let result = new Array(n);
        let left = 0, right = n-1, pos = n-1;
        while(left<=right){
            let leftSq = nums[left] * nums[left];
            let rightSq = nums[right] * nums[right];

            if(leftSq >= rightSq){
                result[pos] = leftSq;
                left++;
            } else {
                result[pos] = rightSq;
                right--;
            }

            pos--;
        }
        return result;
    }
}
