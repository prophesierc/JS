/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    if(nums.length === 0)
    {
        return init
    }

    let container = 0
    for (let i = 0; i < nums.length; i++)
    {
        container += fn(init,nums[i])
    }
    return container
    
};

console.log(reduce(nums = [1,2,3,4],
    fn = function sum(accum, curr) { return accum + curr * curr; },
    init = 100))
// 130