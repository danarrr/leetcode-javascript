/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
   
    const swap = function(n1, n2){
        // 交换两个游标位置
        let tmp = nums[n1]
        nums[n1] = nums[n2]
        nums[n2] = tmp
    }
    function findLocaltion(start, end){
          if (start === end) return nums[start];
        // 因为是搜索第二大  所以指定值 left 是更大的值， right是更小的值
        // 1. 先排序，倒序的数组
        // 2. 找到游标是[k-1] 就是要找的值
        let s = start, e = end + 1 

        while(true){
            // nums[start] 拿这个值来做对比（随机的）
            while(nums[++s] > nums[start]){ if(s === end)break}
            while(nums[--e] < nums[start]){ if(e === start)break}
            
            if(s < e){
                swap(s, e)
            }

            if(s >= e){
                swap(start, e)
                break
            } 
        }

        if(e === k-1){
            return nums[e]
        } else if(e > k-1){
            return findLocaltion(start, e-1)
        } else {
            return findLocaltion(e+1, end)
        }
    }
   return findLocaltion(0, nums.length - 1)
};