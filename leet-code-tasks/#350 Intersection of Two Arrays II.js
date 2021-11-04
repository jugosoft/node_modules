/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let result = [];
    if(!nums1.length || !nums2.length) {
        return;
    }
    let map1 = {};
    for(let i = 0; i < nums1.length; i++) {
        map1[nums1[i]] = map1[nums1[i]] ? map1[nums1[i]] + 1 : 1;
    }
    for(let i = 0; i < nums2.length; i++) {
        if(map1[nums2[i]] && map1[nums2[i]] > 0) {
            map1[nums2[i]] -= 1;
            result.push(nums2[i]);
        }
    }
    return result;
};

intersect([1, 7, 9, 2, 7, 1, 7], [1, 9, 7, 8, 2, 4]);