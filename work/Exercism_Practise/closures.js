const add = (() => // assignes a function to a variable
{
    let counter = 0;
    return () => {counter += 1; return counter} // allows a function to run with a private scope within the parent add function
})(); // Immediately Invoked Function Expression (IIFE):
  
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3

// ------------------------------------

const buildGreeting = () =>
{
    let message = "Hello";
    const greetUser = () =>
    {
      console.log(message);
    }
    return greetUser;
}
const hello = buildGreeting()
hello();

/*
    Closures are any function that has a function within it's private scope
*/
     