/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
         let l1 = headA,
            l2 = headB;
            while (l1 !== l2) {
                l1 = l1 ? l1.next : headB;
                l2 = l2 ? l2.next : headA;
            }
            return l1;
    }
}
