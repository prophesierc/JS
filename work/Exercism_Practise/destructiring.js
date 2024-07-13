const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

// const a = alphabet[0]
// const b = alphabet[1]
const [a,, c, ...rest] = alphabet

const newArr = [...alphabet, ...numbers] // same as aphabet.concat(numbers)

console.log(a) // A
console.log(c) // B
console.log(rest) // ['D', 'E', 'F']

console.log(newArr) // ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6']

const sumAndMultiply = (a, b) => 
{
    return [a+b, a*b]
}
const [sum, multiply, division = 'No Division'] = sumAndMultiply(2, 3) // breaks up const arr into const [variables] to destructure them into 2
console.log(sum)
console.log(multiply)
console.log(division)

console.log('\nObj destructuring =>')

const personOne = 
{
    name: 'Brian',
    age: 26,
    favoriteFood: 'rice',
    address:
    {
        street: '123 test lane',
        state: 'FL',
    }
}

const personTwo = 
{
    name: 'Sally',
    favoriteFood: 'watermelon', // overrides const
    address:
    {
        state: 'Another State',
    }
}
/**
const { name: firstName, age, favoriteFood = 'rice', address: { street } } = personTwo 
// maps key from object into const key value obj name = const name
// can destructures nested objects address: { state } 
// console.log(city) // returns 'Another State'
*/

const { name: firstName,...remainder } = personTwo // maps key from object into const key value obj name = const name
console.log(firstName)
console.log(remainder) // returns remainder of object in object notation

const personThree = {...personOne, ...personTwo}
console.log('personThree =>')
console.log(personThree)

/*
const printUser = (user) =>
{
    console.log(`Name is: ${user.name}. Age is ${user.age}`)
}
    // destructuring allows object to be passed in parameter instead
*/

const printUser = ({ name, age, favoriteFood = 'Watermelon' /* useful because allows to pass arguements that do not overwrite original values if exists */ }) =>
{
    console.log(`Name is: ${name}. Age is ${age}. Favorite food is ${favoriteFood}`)
}

printUser(personOne)
printUser(personTwo) // undefiend age due to being removed
printUser(personThree)