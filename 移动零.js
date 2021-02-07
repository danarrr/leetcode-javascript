// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 如果是0就与下一位交换，注意这里的游标一定要拆分开
var moveZeroes = function(nums, l = 0, r = -1) {
    while(++r < nums.length) {
      if (nums[r]){
        nums[l] === 0 && ([nums[l], nums[r]] = [nums[r], nums[l]])
        l++
      }  
    }
};

