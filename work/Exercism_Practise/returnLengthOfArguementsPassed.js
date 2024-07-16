/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
const argumentsLength = (...args) => {
    return args.length;
};


// Example usage:
console.log(argumentsLength(1, 2, 3)); // 3
console.log(argumentsLength()); // 0
console.log(argumentsLength('a', 'b', 'c', 'd')); // 4
