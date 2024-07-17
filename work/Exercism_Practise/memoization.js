/**
 * @param {Function} fn
 * @return {Function}
 */
const memoize = (fn) => 
    {
        const cache = {};
    
        return function(...args)
        {
            const key = args.join(',');
            
            if (key in cache) 
            {
                return cache[key];
            }
    
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    }
    
    

 let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
   return a + b;
 })
 
 console.log(callCount) // 1 
 console.log(memoizedFn(2,3)) // 5
 
