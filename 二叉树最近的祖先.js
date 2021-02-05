题型1: 无序二叉树，不遵循左树小 右树大规则
/**
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”


示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。 
*/

// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
var lowestCommonAncestor = function(root, p, q) {
    /**
     *  root 就是 p q 直接返回
     *  root 为null 返回null
     *  root 不是这些值 继续向下递归
     *      如果pq分布在左右树  则当前root就是最大的公共祖先
     *      如果右树不存在 pq 递归左树
     *      如果左树不存在pq 递归右树
     *  */

    if(root === p || root === q){
        return root
    }
    if(root !== p && root !== q && root !== null){
        // 查看是否有在左右树
        const leftAncestor = lowestCommonAncestor(root.left, p, q)
        const rightAncestor = lowestCommonAncestor(root.right, p, q)

        if(leftAncestor && rightAncestor){
            return root
        } else if (!leftAncestor){
            return rightAncestor
        } else {
            return leftAncestor
        }
    }

};




题型2：无序二叉树，遵循左树小 右树大规则
/**
root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。

https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
*/

var lowestCommonAncestor = function(root, p, q) {
    // 公共的值肯定是在树的中间， 所以只需要递归两种情况，递归左子树，递归右子树
    if( root.val > p.val && root.val > q.val ){
       return lowestCommonAncestor(root.left, p, q)
    }
    if( root.val < p.val && root.val < q.val ){
       return lowestCommonAncestor(root.right, p, q)
    }
    return root
};