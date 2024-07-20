// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);

// ----------------------------------------------

const radius = [1, 2, 3];

// logic to clculate area
const area = (radius) => 
{
    return Math.PI * radius * radius;
}

// logic to calculate diameter
const diameter = (radius) =>
{
    return 2 * radius;
}

// a reusable function to calculate area, diameter, etc
const calculate = (radius, logic) => 
{ 
    const output = [];
    for(let i = 0; i < radius.length; i++)
    {
        output.push(logic(radius[i])) 
        // pushes current iteration value of radius after running inner function into output []
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

/*
    Higher order functions are any functions that take a function as an input or parameter 
 */