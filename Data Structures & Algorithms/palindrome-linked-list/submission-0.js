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
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
         if(!head && !head.next) return false;

    let fast = head;
    let slow = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let curr = slow;
    let prev = null;

    while(curr){
        let nextNode = curr.next;
        curr.next= prev;
        prev = curr;
        curr = nextNode;
    }

    let first = head;
    let second = prev;

    while(second){
        if(first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }

    return true;
    }
}
