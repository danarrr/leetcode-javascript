/**
 输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4  // 翻转后的索引
 */
var search = function(nums, target) {
    let left = 0, right = nums.length-1
    while(left <= right){
        let mid = (left+right)>>1
        if (nums[mid] == target) {
            return mid;
        }
        // 当mid小于最右边的数，则右边的数是有序的. 以这个为截点去搜索target
        // 当mid大于最右边的数，左半段是有序的，以这个为截点去搜索target
        if(nums[mid]< nums[right]){
            if(target > nums[mid] && target <= nums[right]){
                left = mid+1
            } else {
                right = mid-1
            }
        } else {
            if(target >= nums[left] && target < nums[mid]){
                right = mid-1
            } else {
                left = mid+1
            }
        }
    }
    return -1
}