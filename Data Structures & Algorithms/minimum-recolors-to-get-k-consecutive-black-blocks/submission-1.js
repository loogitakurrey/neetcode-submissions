class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let left = 0;
        let res = k;
        let reColor = 0;
        for(let right = 0; right < blocks.length; right++){
            if(blocks[right] === "W"){
                reColor++;
            }
            if(right - left + 1 === k){
                res = Math.min(reColor, res);
                if(blocks[left] === "W"){
                    reColor -= 1;
                }
                left++;
            }
        }
        return res;
    }
}
