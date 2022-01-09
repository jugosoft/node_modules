// Remove Nth Node From End of List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {

    let secondPass = head;
    let firstPass = head;

    for (let i = 0; i < n; i++) {
        if (firstPass.next === null && i === n - 1) {
            head = head.next;
            return head;
        }
        firstPass = firstPass.next;
    }

    while (firstPass && firstPass.next) {
        firstPass = firstPass.next;
        secondPass = secondPass.next;
    }

    if (secondPass && secondPass.next) {
        secondPass.next = secondPass.next.next;
    }
    return head;
};
