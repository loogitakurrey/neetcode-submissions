class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1;

        const isAlnum = c => /[a-z0-9]/i.test(c);

        while (left < right) {
            while (left < right && !isAlnum(s[left]))  left++;
            while (left < right && !isAlnum(s[right])) right--;

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

            left++;
            right--;
        }
        return true;
    }
}
