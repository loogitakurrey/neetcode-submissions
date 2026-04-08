class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let maxCount = 0;
        let left = 0;

        for(let right = 0; right < s.length; right++){
            const char = s[right];

            if(map.has(char) && map.get(char) >= left){
                left = map.get(char) + 1;
            }

            map.set(s[right], right);
            maxCount = Math.max(maxCount, right - left +1);
        }
        return maxCount;
    }
}
