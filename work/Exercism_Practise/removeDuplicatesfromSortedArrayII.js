/**
 * @param {number[]} nums
 * @return {number}
 */
 
const removeDuplicates = (nums) => 
{
    let k = 1;

    for (let i = 1; i < nums.length; i++) 
    {
        if ((nums[i] !== nums[i - 1]) && nums[i].length > 2) 
        {
            nums[k] = nums[i];
            k++;
        }
    }
    return nums;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
// 5, nums = [0,0,1,1,2,3,3]