/**
输入：head = [4,2,1,3]
输出：[1,2,3,4]
 */
// 复杂的解法（快慢指针找中间节点 -> 分割成两个链表 -> 对两个链表进行排序 -> 再合并
var sortList = function(head) {
    // 边界情况处理
    if (!head || !head.next)  return head;
    // 快慢指针 ps起点是一样
    let fast = head, slow = head
    let preSlow = null;
    while(fast && fast.next ){
        preSlow = slow;
        fast = fast.next.next
        slow = slow.next
    }
    preSlow.next = null;
    const l = sortList(head)
    const r = sortList(slow)

    return mergeAndSort(l, r)
};

function mergeAndSort(l1, l2){
    // 排序并合并
    const node = new ListNode(0)
    let tmp = node
    while(l1 && l2){
        if(l1.val < l2.val){
            tmp.next = l1
            // 为下一次遍历准备
            l1 = l1.next
        } else{
            tmp.next = l2
             // 为下一次遍历准备
            l2 = l2.next
        }
         // 为下一次遍历准备
        tmp = tmp.next
    }
     // 为下一次遍历准备
    l1 && (tmp.next = l1)
    l2 && (tmp.next = l2)
    return node.next
}