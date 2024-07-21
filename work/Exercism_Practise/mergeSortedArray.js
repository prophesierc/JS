/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) =>
{
    nums1.splice(m, n + m, ...nums2); // starts at index m (3) to index (n+m) (6) and inserts elements from nums2 by using the spread operator by removing the elements from nums2 first
    return nums1.sort((a,b) => a - b); // compares elements a and b; If a-b is positive, it returns positive which would come second because it would result in a being larger than b
};

// console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
// Output: [1,2,2,3,5,6]

// Time Complexity: O((m+n)log(m+n))
// Space Complexity: O(1)

// ---------------------------------------------------

// Most Optimal 2 pointer merge:

const optimalMerge = (nums1, m, nums2, n) => 
{
    // nums1: [1, 2, 3, 0, 0, 0] nums2: [2, 5, 6]
    // => nums1: [1, 2, f, 0, 0, i] nums2: [2, 5, s]
    // => nums1: [1, 2, f, 0, i, 6] nums2: [2, s, 6]
    // => nums1: [1, 2, f, i, 5, 6] nums2: [s, 5, 6]
    // => nums1: [1, 2, f, 3, 5, 6] nums2: [s, 5, 6]
    // => nums1: [1, f, i, 3, 5, 6] nums2: s[2, 5, 6]
    // => nums1: [1, 2, 2, 3, 5, 6] nums2: [2, 5, 6]
    let f = m - 1; // Pointer for end of initialized elements in nums1 // defines max index of nums1
    let s = n - 1; // Pointer for end of nums2 // defines max index of nums2
    let i = m + n - 1; // Pointer for end of the merged array in nums1 // defines max index of nums1 + nums2

    // [work/Exercism_Practise/comment-images/markuphero-ZE4ifYwDNKC23NsU3750.png]
    // Merge nums1 and nums2 from the end to the start
    while (f >= 0 && s >= 0) // while nums1 & nums2 contain elements
    {
        if (nums1[f] > nums2[s]) // if current element in nums1 is greater than the current element in nums2
        {
            nums1[i--] = nums1[f--]; // place the larger element at the end of nums1 and move the 2 pointers inside nums1
            // if nums1[f] > nums2[s] => nums1[i] == nums1[f] then decrement both
            // moves pointer f into the last current pointer inside nums1
        } 
        else 
        {
            nums1[i--] = nums2[s--]; // place the larger element from nums2 at the end of nums1 and move the pointers
            // if nums1[f] !> nums2[s] => nums1[i] == nums2[s] then decrement both
        }
    }

    // If there are remaining elements in nums2, copy them
    while (s >= 0) // checks if nums2 contains elements after nums1 is empty
    {
        nums1[i--] = nums2[s--]; // copy the remaining elements from nums2 to nums1
    }

    return nums1; // return the merged array
};

console.log(optimalMerge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3))
// Time Complexity: O(m + n)
// Space Complexity: O(1)