/**
 * @param {Function} fn
 * @return {Function}
 */
// Define a function `memoize` that takes another function `fn` as its argument
const memoize = (fn) => {
    // Create an object `cache` to store the results of function calls
    const cache = {}; 

    // Return a new function that wraps around the original function `fn`
    return (...args) => {            
        // Check if the cache already has an entry for the given arguments
        if (args in cache) return cache[args];

        // If the result is not in the cache, compute it by calling the original function `fn`
        // Store the result in the cache and return it
        return cache[args] = fn(...args);
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

/*
      [Start]
         |
         V
    [Generate Key]
         |
         V
    [Cache Check]
    /          \
    /            \
    Yes          No
    |             |
    V             V
    [Return    [Execute
    Cached    Function]
    Value]       |
    |            V
    |      [Update Cache]
    |           |
    |           V
    |      [Return Result]
    |          |
    V          V
    [End]    [End]
*/
