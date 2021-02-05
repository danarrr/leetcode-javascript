/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


var rotateRight = function(head, k) {
    /**
     * 1. 遍历到没有next的head 最尾指向最头形成环链表
     * 2. 找到断开的位置
     * 3. 对数据重新进行组装
     */
    if(!head) return null
    let n = 0 // 记录遍历的次数
    let curr = head
    while(++n && curr.next){
        curr = curr.next
    }
    curr.next = head
    k = k % n // 进来的几圈第几个
    while( ++k < n){
        // 找到断开的位置
        head = head.next
    }
    let tmp = head // 赋值head的引用进行打断 又不会新指向head的next值
    head = head.next
    tmp.next = null // 打断
    return head
};