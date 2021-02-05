/** 
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

*/
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.minStack = [Infinity] //Infinity无穷数 可以是正无穷或者负无穷
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    // 在入栈的时候就进行判断
    this.minStack.push(Math.min(this.minStack[this.minStack.length-1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const len = this.stack.length
    return this.stack[len-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// ==============================================================================================================================
// LRU算法
var LRUCache = function(capacity) {
    this.map = new Map()
    this.capacity = capacity
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // get 
    // 1.返回队列中是否有这个值
    // 2.如果有这个值 队列中要把值提到最新一位（因为次key使用次数+1）
    if(this.map.has(key)){
        const value = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, value)
    }
    return  this.map.has(key) ?this.map.get(key) : -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 加塞数据的时候有三种
    // 1. 队列中没有这个值并且还有空位 直接加塞
    // 2. 队列中有这个值 就直接写
    // 3. 队列中满了  但是没有这个值 删掉第一个位entries / key 方法
    if((this.map.size < this.capacity) && !this.map.has(key)){
        this.map.set(key, value)
    } else if(this.map.has(key)){
        this.map.delete(key)
        this.map.set(key, value)
    } else if(this.map.size = this.capacity && !this.map.has(key)){
        this.map.delete(this.map.entries().next().value[0])
        this.map.set(key, value)
    }
};