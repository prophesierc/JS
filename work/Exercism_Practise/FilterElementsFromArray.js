/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 **/
// const filter = function(arr, fn) 
// {
//     const filteredArray = [];
//     for (let i = 0; i < arr.length; i++) 
//     {
//         if (fn(arr[i], i)) 
//         // arr[i] is the element at index i
//         // at arr = [0, 10, 20, 30], arr[i] is 20 at i = 2
//         {
//             filteredArray.push(arr[i]);
//             //pushes element of arr into new arr if function truthy
//         }
//     }
//     return filteredArray;
// };

const filter = function(arr, fn)
{
    // Initialize currentIndex to keep track of the position to store filtered elements
    let currentIndex = 0;

    // Iterate through each element of the arr
    for (let i = 0; i < arr.length; i++) 
    {
        // Check if the current element arr[i] satisfies the function fn
        if (fn(arr[i], i)) 
        {
            // If truthy, copy arr[i] to arr[currentIndex]
            arr[currentIndex] = arr[i];
            // Increment currentIndex to mark the next available position in arr
            currentIndex++;
        }
    }
    // Trim arr to contain only the filtered elements up to currentIndex
    arr.length = currentIndex;
    return arr;
};

console.log(filter(arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }));
// Output: [1]

console.log(filter(arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }));
// Output: [20, 30]
