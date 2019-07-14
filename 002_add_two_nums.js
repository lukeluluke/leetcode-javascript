/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0); // Default list val = 0, next = null
    let sum = 0;
    let p3 = l3;
    while (l1 || l2) {
        /**
         * If sum > 10, need to get 1 because previous sum maybe 5 + 5 or 5+6
         * @type {number}
         */
        sum = Math.floor(sum /10);
        if (l1) {
            sum +=l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum +=l2.val;
            l2 = l2.next;
        }

        l3.next = new ListNode(sum%10);
        l3 = l3.next;
    }

    if (Math.floor(sum/10) === 1) {
        l3.next = new ListNode(1);
    }

    return  p3.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
