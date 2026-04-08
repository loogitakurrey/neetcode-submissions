class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let map = new Map();
        let maxFruit = 0;
        let left = 0;

        for(let i = 0 ; i < fruits.length; i++){
            const char = fruits[i];
            map.set(char, (map.get(char)|| 0 ) + 1);

            while(map.size > 2){
                map.set(fruits[left], map.get(fruits[left]) - 1);
                if(map.get(fruits[left]) === 0){
                    map.delete(fruits[left]);
                }
                left++;
            }

            maxFruit = Math.max(maxFruit, i - left + 1);
        }

        return maxFruit;
    }
}
