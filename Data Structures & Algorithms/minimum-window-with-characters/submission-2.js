class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length === ""){
            return "";
        }
        let map = new Map();
        let window = new Map();
        for(let ch of t){
            map.set(ch, (map.get(ch)||0)+1);
        }
        let l=0;
        let have = 0;
        let need = map.size;
        let minLen = Infinity;
        let res = [-1, -1];
        for(let r =0; r< s.length; r++){
            const char = s[r];
            window.set(char, (window.get(char)||0) + 1);
            if(map.has(char) && window.get(char) === map.get(char)){
                have +=1;
            }

            while(have === need){
                if(r-l+1 < minLen){
                    minLen = r-l+1;
                    res = [l,r];
                }

                window.set(s[l], window.get(s[l]) - 1);
                if(map.get(s[l]) && window.get(s[l]) < map.get(s[l])){
                    have--;
                }
                l++;
            }
        }
        return minLen === Infinity ? "": s.slice(res[0], res[1]+1);
    }
}
