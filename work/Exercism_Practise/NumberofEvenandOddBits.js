/**
 * @param {number} n
 * @return {number[]}
 **/
let evenOddBit = function(n) {
    let even = 0;
    let odd = 0;
    const intToBin = (n >>> 0).toString(2);
    // n : int => bin : string

    for (let i = 0; i < intToBin.length; i++) 
    // iterates through bin : string
    {
        if (intToBin[intToBin.length - 1 - i] == '1')
        // points at rightmost bit in bin : string and checks if == '1'
        {
            i % 2 === 0 ? even++ : odd++
            // checks if iteration is even or odd and increments to variable
        }
    }
    return [even, odd];
    // returns in array 
};


console.log(evenOddBit(55)); // Output should be [2, 0]
console.log(evenOddBit(200)); // Output should be [1, 0]
