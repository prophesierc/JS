/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = [];
    for (let n = 0; n < arr.length; n++)
    {
        newArr.push(fn(arr[n], n))
        // takes index n of arr and applies fn function to each index and pushed to newArr
        // (arr[n], n) is needed for multi-arguement in fn
    }
    return newArr
};

console.log(map(
    arr = [1, 2, 3], fn = function plusone(n) { return n + 1; }
))
console.log(map(
    arr = [1, 2, 3], fn = function plusI(n, i) { return n + i; }
))
console.log(map(
    arr = [10,20,30], fn = function constant(n, i) { return 42; }
))