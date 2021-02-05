// 给定一个链表，判断链表中是否有环。
var hasCycle = function(head) {
    if(!head||head.next == null) return false
    // 快慢指针可以计算相遇的问题
    let fast = head
    let slow = head
    
    while(fast.next && slow.next && slow.next.next){
        fast = fast.next // 快兔子  
        slow = slow.next.next // 乌龟

        if(fast === slow){
            return true
        }
    }
    return false
};
