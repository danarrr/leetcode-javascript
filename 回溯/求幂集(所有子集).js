/** 
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
// 回溯算法 模板
// for 选择 in 选择列表:
//         # 做选择
//         将该选择从选择列表移除
//         路径.add(选择)
//         backtrack(路径, 选择列表)
//         # 撤销选择
//         路径.remove(选择)
//         将该选择再加入选择列表

// https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/

var subsets = function(nums) {
    let result = []
    const dfs = (index, list) => {
       if(nums.length === index) {
           result.push([...list])
           return 
       }

       list.push(nums[index])
       dfs(index+1, list)
       list.pop()
       dfs(index+1, list)
    }
    dfs(0, [])
    return result
};