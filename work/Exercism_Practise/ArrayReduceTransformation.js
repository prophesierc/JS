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

    /*
    for (let x of nums)
    {
        init = fn(init, x)
    }
    return init
    */

    // Runtime 56ms Beats 46.84% 
    // Memory 50.34 MB Beats 8.57%

    // return nums.map((x) => init = fn(init, x))[nums.length -1]
    // Runtime 63 ms Beats 13.28%
    // Memory 50.00 MB Beats 12.43% 

    /* Best Solution
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i]);
    }
    return init;    
    */
    // Runtime 53 ms Beats 64.49%
    // Memory 49.01 MB Beats 68.99%
};

/*
for(let x of arr) iterates the values of each index
for(let x = 0; x < arr.length; x++) iterates the index of the arr

for(let x = 0; x < arr.length; x++)
{
    arr[x] iterates each arr value in the same way as the for(of) loop
}
*/

console.log(reduce(nums = [1,2,3,4],
    fn = function sum(accum, curr) { return accum + curr * curr; },
    init = 100))
// 130