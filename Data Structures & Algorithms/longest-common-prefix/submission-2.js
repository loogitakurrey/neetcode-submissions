class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        strs.sort(); // sort lexicographically

    let first = strs[0];
    let last = strs[strs.length - 1];

    let ans = "";

    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            ans += first[i];
        } else {
            break;
        }
    }

    return ans;
    }
}
