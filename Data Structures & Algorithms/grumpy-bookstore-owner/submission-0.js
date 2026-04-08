class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let l =0;
        let window = 0;
        let satisfied = 0;
        let maxWin = 0;

        for(let r = 0; r< customers.length; r++){
            if(grumpy[r]){
                window += customers[r];
            } else {
                satisfied += customers[r];
            }

            if( r - l + 1 > minutes){
                if(grumpy[l]){
                    window -= customers[l];
                }
                l++;
            }
            maxWin = Math.max(window, maxWin);
        }

        return maxWin + satisfied;
    }
}
