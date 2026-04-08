class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freq = new Map();
    if (s1.length > s2.length) return false;
    
    for(let ch of s1){
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let left = 0;
    let match = 0;

    for(let i =0 ; i< s2.length; i++){
        const char = s2[i];
        if(freq.has(char)){
            freq.set(char, freq.get(char) - 1);
            if(freq.get(char) === 0){
                match++;
            }
        }

        if(i >= s1.length - 1){
            if(match == freq.size) return true;

            const leftChar = s2[left];
            if(freq.has(leftChar)){
                if(freq.get(leftChar) === 0) match-- ;
                freq.set(leftChar, freq.get(leftChar) + 1);
            }
            left++;
        }
    }
     return false;
    }
}
