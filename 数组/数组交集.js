// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]

// 排序+双指针
var intersect = function(nums1, nums2) {
    // 这里不晓得为啥要排序，但是下面的指针的确是基于这里开始计算的
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)

    // 指针起点
    let p1 = 0, p2 = 0, result =[]
    while(p1 < nums1.length && p2< nums2.length){
        if(nums1[p1] > nums2[p2]){
            p2++
        } else if(nums1[p1] < nums2[p2]){
            p1++
        } else{
            // 重点  如果是相同的则推入栈中
            result.push(nums1[p1])
            p2++
            p1++
        }
    }
    return result
};