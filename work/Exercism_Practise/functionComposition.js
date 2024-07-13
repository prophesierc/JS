/**
 * @param {Function[]} functions
 * @return {Function}
 **/
const compose = function(functions) {
    return function(x) {
        for (let i = functions.length-1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
    /*
        for loop starts at the last function with functions.length-1
        stops loop when there are no more functions with 1 >= 0
        deincrements with i-- to reduce the length each iteration
            functions[i](x) call each iterations function at index [i] using arguement (x)
    */
    // uses a for loop to return the value of x inputted into the arguement starting right to left (reverse normal for loop)
};

    /*
    const compose = function(functions) {
        return function(x) {
            for (const fn of function.reverse()) {
                x = fn(x)
            }
            return x;
        }
    }
    */

/*
    Function composition is a technique where multiple functions are combined to form a new function used for Encapsulation, Reusability, Currying and Partial Application

    Currying - functions with multiple arguements are tranformed into a series of function that each take a single arguement.

    Partial Application - apply some arguements immediately (in this case, the array of functions), and delay applying the arguement (x) until later
*/

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) 
// => 9

/*
// => [x => x + 1, x => 2 * x]
    const fn1 = () x => x + 1; 
    const fn2 = () x => 2 * 2;
    fn1(fn2(4)) //=> 9
*/
//composition easily wraps functions 