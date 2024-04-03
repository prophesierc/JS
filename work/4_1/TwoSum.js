// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (nums, target) => 
{
    // Create a Map to store the indices of elements
    const numIndices = new Map();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) 
    {
    // nums[i] represents the current element being processed in the array.
        // console.log(nums[i] = [2]); // returns [2][2][2][2]
    // target is the desired sum we want to achieve using two elements from the array.
        // target is equal to 2 indicies of nums[i]
    // Subtracting nums[i] from target gives us the value that, when added to nums[i], would equal the target sum.
        // target - nums[i] = one of the indicies; 
        // if index[0] of nums[i] = 2 & target = 9 => target - nums[i] at that index = 9 - 2 = 7, so therefore values must be 2 and 7

        // If the target - nums[i] is in the Map, return the indices
        if (numIndices.has(target - nums[i])) // if numIndicies contains the value of 9 - current iteration // 2 = 7 --
        // checks if there's a previously encountered number whose sum with the current number equals the target value
        {
            return [numIndices.get(target - nums[i]), i]; // returns an array containing the indices of those two numbers
        }
        // Otherwise, store the index of the current number
        numIndices.set(nums[i], i); // sets the numIndices map to contain nums[i], i
        //nums[i] as the key and i as the value
    }
    
    // If no solution is found, implicitly return undefined
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
