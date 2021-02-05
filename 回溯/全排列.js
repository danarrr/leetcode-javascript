// 回溯算法 模板
// for 选择 in 选择列表:
//         # 做选择
//         将该选择从选择列表移除
//         路径.add(选择)
//         backtrack(路径, 选择列表)
//         # 撤销选择
//         路径.remove(选择)
//         将该选择再加入选择列表

/** 
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。 (列出所有的排列情况)
 示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 回溯算法
 */
var permute = function(nums) {
    const result = []
    const DFS = (arr) => {
        // 如果长度相同则无需再次递归
        if (arr.length === nums.length){
            result.push(arr.slice())
            return 
        }
        for (let i = 0; i < nums.length; i++) {
            if (!arr.includes(nums[i])) {
                arr.push(nums[i])
                DFS(arr)
                arr.pop(nums[i])
           }  
        }
    }
   DFS([])
   return  result
};