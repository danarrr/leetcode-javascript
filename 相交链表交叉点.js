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