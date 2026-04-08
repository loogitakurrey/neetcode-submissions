class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0;
        let n = height.length;

        for(let i =0; i<n;i++){
            let leftMax =0, rightMax=0;
            for(let l=0; l<=i; l++){
                leftMax = Math.max(leftMax, height[l]);
            }
            for(let r=i; r<n;r++){
                rightMax = Math.max(rightMax, height[r]);
            }

            res += Math.min(leftMax, rightMax) - height[i];
        }
        return res;
    }
}
