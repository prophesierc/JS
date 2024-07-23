/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) =>
{
    let memo = {}
    for (let i = 0; i < nums.length; i++)
    {
        if (!nums[i] in memo)
        {
            nums[i] = memo
        }
    }
    return memo
    
};

console.log(removeDuplicates([1,1,2]))
// 2, nums = [1,2]