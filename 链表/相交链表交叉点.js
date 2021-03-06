/**
 * 
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

 */

var getIntersectionNode = function(headA, headB) {
    // 双指针的方式计算交叉的节点
    if(!headA || !headB) return null
    let  pA = headA
    let  pB = headB
    
    while(pA !== pB){
        // 两个链表同时计算
        pA = pA === null ? headB : pA.next
        pB = pB === null ? headA : pB.next
    } 
    return pA
   
};