class Monster 
{
    constructor(name)
    {
        this.name = name
    }

    attack()
    {
        console.log(`${this.name} attacked`)
    }
    walk()
    {
        console.log(`${this.name} walked`)
    }
    fly() //have to move fly from FlyingMonster into base due to non composition manner of inheritence between mulitple class
    {
        return
    }
}

class FlyingMonster extends Monster
{
    fly()
    {
        console.log(`${this.name} flew`)
    }
}

class SwimingMonster extends Monster
{
    swim()
    {
        console.log(`${this.name} swam`)
    }
}

class FlyingSwimmingMonster extends SwimingMonster
{
    fly() // copied logic
    {
        console.log(`${this.name} flew`)
    }
}

console.log('inherit =>')
const bear = new Monster('Bear')
bear.walk()
bear.attack()

const eagle = new FlyingMonster('Eagle')
eagle.walk()
eagle.attack()
eagle.fly()

const shark = new SwimingMonster('Shark')
shark.swim()
shark.attack()

const flyingShark = new FlyingSwimmingMonster('Fly Shark')
flyingShark.fly()
flyingShark.attack()

//composition

const swimmer = ({name}) => //object destructuring => passes object
{
    return{
        swim: /*object */ () => /* Anonymous function */ console.log(`${name} swam`)
    }
}

const flyer = ({name}) => //object destructuring => passes object
{
    return{
        fly: /*object */ () => /* Anonymous function */ console.log(`${name} flew`)
    }
}

const attackerAndWalker = ({name}) => //object destructuring => passes object
{
    return{
        attack: /*object */ () => /* Anonymous function */ console.log(`${name} attacked`),
        walk: /*object */ () => /* Anonymous function */ console.log(`${name} walked`)
    }
}

// swimmer({name: 'Eagle'})  => doesn't return anything because needs to be formatted as object
/*const swimmerObject = swimmer({ name: 'Eagle' })
swimmerObject.swim()
*/

const SwimingMonsterCreator = (name) =>
{
    const monster = { name: name }

    return{
        ...monster, 
        ...swimmer(monster),
        ...flyer(monster),
        ...attackerAndWalker(monster)
    }
}
console.log('\ncomp =>')
const smObject = SwimingMonsterCreator('Monster')
smObject.swim() // returns Monster swam
smObject.fly() // returns Monster flew
smObject.attack() // returns Monster attacked
smObject.walk() // returns Monster walked

