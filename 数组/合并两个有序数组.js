var merge = function(nums1, m, nums2, n) {
    let i  = nums1.length - 1 
    m--
    n-- 
    while(n >= 0){
        nums1[m] > nums2[n] ? (nums1[i--] = nums1[m--]):(nums1[i--] = nums2[n--])
    }
}