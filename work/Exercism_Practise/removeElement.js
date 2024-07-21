/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// this is a type of two pointer
// point 1 is the counter
// point 2 is the iterator
const removeElement = (nums, val) => {
    let counter = 0; // Pointer for placing non-val elements

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) 
    {
        // If the current element is not equal to 'val'
        if (nums[i] !== val) // if current element is not equal to val
        {
            // Place the element at the 'counter' position
            nums[counter] = nums[i]; // current element is moved to front of nums
            counter++; // incrmenet counter
        }
    }

    // 'counter' now represents the length of the modified array with 'val' removed
    return counter;
};

console.log(removeElement(nums = [3,2,2,3], val = 3))
// 2, nums = [2,2,,]