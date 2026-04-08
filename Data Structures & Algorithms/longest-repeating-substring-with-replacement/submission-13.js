class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxf = 0;
        let map = new Map();
        let res = 0;
        let left = 0;

        for(let i = 0; i<s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1);
            maxf = Math.max(maxf, map.get(s[i]));

            if(i - left + 1 - maxf > k){
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            res = Math.max(res, i - left + 1);
        }
        return res;
    }
}
