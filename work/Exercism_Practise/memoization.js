/**
 * @param {Function} fn
 * @return {Function}
 */
const memoize = (fn) => 
{
    const cache = {}; 

    return function(...args)
    {            
        if (args in cache) return cache[args];

        const result = fn(...args);
        cache[args] = result;
        return result;
    }
}
    

 let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
 })
 
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1 

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
console.log(memoizedSum(2, 2)); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
console.log(memoizedSum(1, 2)); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2

 
