class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === "") return "";

        let windowCount = new Map();
        let countT = new Map();
        for( let ch of t){
            countT.set(ch, (countT.get(ch)|| 0) + 1);
        }
        let have = 0;
        let need = countT.size;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for(let r = 0; r < s.length; r++){
            const char = s[r];
            windowCount.set(char, (windowCount.get(char)|| 0) + 1);
            if(countT.has(char) && windowCount.get(char) === countT.get(char) ){
                have += 1;
            }
            while(have === need){
                if(r-l+1 < resLen){
                    res = [l, r];
                    resLen = r - l + 1;
                }
                windowCount.set(s[l], windowCount.get(s[l]) - 1);
                if(countT.get(s[l]) && windowCount.get(s[l]) < countT.get(s[l])){
                    have -=1;
                }
                l++;
            }
        }
        return resLen == Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
