class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        let map = new Map();
        let l = 0;
        let maxLen = 0;

        for(let r = 0; r < s.length; r++){
            const char = s[r];
            map.set(char, (map.get(char)||0) + 1)
            while(map.size > 2){
                map.set(s[l], map.get(s[l]) - 1);
                if(map.get(s[l]) === 0){
                    map.delete(s[l]);
                }
                l++;
            }
            maxLen = Math.max(maxLen, r-l +1);
        }
        return maxLen;
    }
}
