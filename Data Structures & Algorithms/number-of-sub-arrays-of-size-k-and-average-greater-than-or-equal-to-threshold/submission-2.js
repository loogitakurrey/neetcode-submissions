class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let numsOfSubArray = 0;
        let curSum = 0;
        threshold *= k;
        
        for(let right = 0; right < arr.length; right++){
            curSum += arr[right];
            if(right >= k-1){
                if(curSum >= threshold){
                    numsOfSubArray++;
                }
                curSum -= arr[right - k + 1];
            }
        }
        return numsOfSubArray;
    }
}
