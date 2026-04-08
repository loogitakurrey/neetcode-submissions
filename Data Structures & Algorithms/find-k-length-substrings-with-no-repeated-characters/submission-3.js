class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    numKLenSubstrNoRepeats(s, k) {
        if (k > s.length) return 0;

        let map = new Map();
        let left = 0;
        let count = 0;

         for (let right = 0; right < s.length; right++) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);

            if (right > k-1){
                map.set(s[left], map.get(s[left]) - 1)
                if(map.get(s[left]) === 0) map.delete(s[left]);
                left++;
            }

            if (right - left + 1=== k && map.size === k) {
                count++;
            }
        }
        return count;
    }
}
