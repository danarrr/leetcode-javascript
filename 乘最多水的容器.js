/**给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
说明：你不能倾斜容器。

示例：
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
*/

var maxArea = function(height) {
    // 双指针法
    // 1.给定两个指针 指向最前和最后
    // 2.对比上次存储的面积大小和这次的面积大小
    let maxArea = 0, left = 0 , right = height.length-1, currArea
    while(left < right){ // 当两个游标相遇之前  都是可以遍历
        currArea = (right-left) * Math.min(height[right], height[left])
        height[left] < height[right] ? left++: right--
        maxArea = Math.max(maxArea, currArea)
    }

    return maxArea
};