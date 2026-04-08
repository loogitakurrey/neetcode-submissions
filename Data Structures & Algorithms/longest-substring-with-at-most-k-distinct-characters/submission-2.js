class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        if(k == 0) return 0;
        let map = new Map();
        let left = 0;
        let maxLength = 0;

        for(let i = 0; i< s.length; i++){
            const char = s[i];
            map.set(char, (map.get(char) || 0 ) + 1);

            while(map.size > k){
                map.set(s[left], map.get(s[left]) - 1)
                if(map.get(s[left]) === 0){
                    map.delete(s[left]);
                }
                left++;
            }

            maxLength = Math.max(maxLength, i - left + 1);
        }

        return maxLength;
    }
    
}
