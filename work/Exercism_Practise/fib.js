const fib = (n) =>
{
    if (n < 2) return n
    return fib(n-1) + fib(n-2) 
    /* each iteration breaks into O(2^n) because each iteration is doubled for each fib() on each side creating a node tree
                                                    fib(5)
                                                fib(4) + fib(3)
                                ( fib(3) + fib(2) ) | ( fib(2) + fib(1) )
        ( ( fib(2) + fib(1) ) ) | ( fib(1) + fib(0) ) | ( fib(1) + fib(0) ) fib(1)
            ( ( fib(1) + fib(0)) + fib(1)) | fib(1) + fib(0) | fib(1) + fib(0) | fib(1)
                                        fib(1) = 5 + fib(0) = 3
                                                fib(5) = 5
    */
}
// console.log(fib(5)) // unoptimized


const memoFib = (n, memo={}) => {
    if (memo[n]) return memo[n] // returns fib values of n if stored in memo before recursion
    if (n < 2) return n 
    return memo[n] = memoFib(n-1, memo) + memoFib(n-2, memo) // memo[n] = stored key inside of memo cache object that is added on within each half of the node tree using the memo parameters in memFib(n-1||2, memo)
    // at memoFib(5), memo starts at {} then appends each value of n to memo, so that it can be retreived first. Memo cuts node tree in half by only calculating the first half of the tree then using the cached values
    /* 
    {
    0: 0,   // Base case: fib(0) = 0
    1: 1,   // Base case: fib(1) = 1
    2: 1,   // fib(2) = fib(1) + fib(0) = 1 + 0 = 1
    3: 2,   // fib(3) = fib(2) + fib(1) = 1 + 1 = 2
    4: 3,   // fib(4) = fib(3) + fib(2) = 2 + 1 = 3
    5: 5    // fib(5) = fib(4) + fib(3) = 3 + 2 = 5
    }
    */
    
/* Memoization Graph for memoFib(5):

      Call Stack            |   Memoization Table (memo)
                            |
                            |
    memoFib(5) (5)          |   [ ]  [ ]  [ ]  [ ]  [5]
        |                   |
    memoFib(4) (4)          |   [ ]  [ ]  [ ]  [4]  [5]
    /      \                |
    memoFib(3)  memoFib(3)  |   [ ]  [ ]  [ ]  [4]  [5]
      /  \          /  \    |
    memoFib(2)  memoFib(2)  |   [ ]  [ ]  [2]  [4]  [5]
    /   \      /   \   /    |
    1    1    1    1  1     |   [ ]  [1]  [2]  [4]  [5]
    |    |    |    |  |     |
    0    0    0    0  0     |   [0]  [1]  [2]  [4]  [5]
*/

}
console.log(memoFib(60)) // optimized with memoization
/*
                                        memoFib(5)
                                /                       \
                            memoFib(4)                 memoFib(3)
                            /          \                  /      \
                    memoFib(3)          memoFib(2)    memoFib(2) memoFib(1)
                    /       \              /    \         |          |
                                                        (1)        (1)                      
            memoFib(2)     memoFib(1) memoFib(1) memoFib(0)
            /    \            |          |          |
    memoFib(1) memoFib(0)    (1)        (1)        (0)
         |         |
        (1)       (0)
*/