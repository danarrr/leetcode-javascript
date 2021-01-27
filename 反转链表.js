/**
 * 题目：反转链表
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    // 递归
    const reverNoder = function(pre, curr){
        if(!curr) return pre
        // 只需要考虑链表当前节点旋转之后的当前值，跟原本curr的next的指向
        const nxtCurr = curr.next
        curr.next = pre
        return reverNoder(curr, nxtCurr)
    }
    return reverNoder(null, head)
};