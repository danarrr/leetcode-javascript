/** 动态规划路径的计算
 * 
 * 我们用 f(i, j)f(i,j) 表示从左上角走到 (i, j)(i,j) 的路径数量，其中 ii 和 jj 的范围分别是 [0, m)[0,m) 和 [0, n)[0,n)。

    由于我们每一步只能从向下或者向右移动一步，因此要想走到 (i, j)(i,j)，如果向下走一步，那么会从 (i-1, j)(i−1,j) 走过来；如果向右走一步，那么会从 (i, j-1)(i,j−1) 走过来。因此我们可以写出动态规划转移方程：
    
    f(i, j) = f(i-1, j) + f(i, j-1)
    f(i,j)=f(i−1,j)+f(i,j−1)
    
示例：
输入：m = 3, n = 7
输出：28
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m);
    for(let i =0; i<n; i++){
        dp[i] = new Array(m)
        dp[i][0] = 1
    }
    for(let i =0; i<m; i++){
        dp[0][i] = 1
    }
    
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[n - 1][m - 1];
};