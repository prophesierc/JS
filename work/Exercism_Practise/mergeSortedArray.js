/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) =>
{
    // return nums1 with m amount of elements with n amount of nums2 inside it then sorted
    nums1 = nums1.splice(m) //wip
    nums1.push(nums2)
    return nums1.flat().sort()
};

console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
// Output: [1,2,2,3,5,6]