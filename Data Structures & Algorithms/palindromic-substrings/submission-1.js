class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res =0;
         for (let i = 0; i < s.length; i++) {
            res += this.expand(s, i, i);
            res += this.expand(s, i, i + 1);
        }

        return res;
    }

   expand(s, left, right) {
        let count = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }

        return count;
    }
}
