/**
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 
*/
// 解题思路
// 标签：排序和双指针

// 首先进行数组排序，时间复杂度 O(nlogn)O(nlogn)
// 在数组 nums 中，进行遍历，每遍历一个值利用其下标i，形成一个固定值 nums[i]
// 再使用前指针指向 start = i + 1 处，后指针指向 end = nums.length - 1 处，也就是结尾处
// 根据 sum = nums[i] + nums[start] + nums[end] 的结果，判断 sum 与目标 target 的距离，如果更近则更新结果 ans
// 同时判断 sum 与 target 的大小关系，因为数组有序，如果 sum > target 则 end--，如果 sum < target 则 start++，如果 sum == target 则说明距离为 0 直接返回结果
// 整个遍历过程，固定值为 n 次，双指针为 n 次，时间复杂度为 O(n^2)O(n 2)

// 排序加双指针解法
var threeSumClosest = function(nums, target, q=[]) {
    nums.sort((a, b) => a-b)
    for(let i = 0; i< nums.length -1; i++){
        let l = i + 1 // start
        let r = nums.length - 1 //end
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            sum >= target ? (q[sum-target] = sum, r--) : (q[target-sum] = sum, l++)
        }
    }
     return q.find(v=>v!==undefined)  
};