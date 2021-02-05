// nums = [0,0,1,1,1,2,2,3,3,4] 输出[0, 1, 2, 3, 4]
var removeDuplicates = function(nums) {   
    if (nums.length == 0) return 0;
    let i = 0;
    for(let j = 1; j < nums.length; j++ ){
        if(nums[j] !== nums[i]){
            nums[++i] = nums[j]
        }
    }
    // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
    return i+1; // 很神奇 原因看左边
};