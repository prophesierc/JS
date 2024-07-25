/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => 
{
    // uses 2 pointer of index and i
    let index = 1; 

    for (let i = 1; i < nums.length; i++) // start at iteration[1]
    {
        if (nums[i] !== nums[i - 1]) // if index[i=1] !== index[i=0]
        {
            nums[index] = nums[i]; // nums[1] = nums[1] allowing non duplicates to be pushed to the first indexes in nums
            index++; //iterate++
        }
    }
    console.log(index)
    return nums;
};

console.log(removeDuplicates([1,1,2])) ///[i=1]!==[i=2], so nums[index=1]=nums[i=1] 
// 2, nums = [1,2]
/* 
Initial array: [1, 1, 2]
index: 1

Step 1:
i = 1, nums[i] = 1, nums[i-1] = 1
No change (nums[i] == nums[i-1])

Array state: [1, 1, 2]
index: 1

Step 2:
i = 2, nums[i] = 2, nums[i-1] = 1
Change (nums[i] != nums[i-1])
nums[index] = nums[i]

Array state: [1, 2, 2]
index: 2

Final array: [1, 2, 2]
Unique count: 2
*/

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// 5, nums = [0,1,2,3,4,_,_,_,_,_]
