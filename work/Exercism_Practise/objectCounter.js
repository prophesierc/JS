function timeToMixJuice(name) {
    const drinkObj = 
      {
          'Pure Strawberry Joy' : 0.5, 
          'Energizer' : 1.5,
          'Green Garden' : 1.5, 
          'Tropical Island' : 3 ,
          'All or Nothing' : 5
      }
      return !drinkObj[name] ? 2.5 : drinkObj[name]
  }
  
function limesToCut(wedgesNeeded, limes) {
    let wedgeCounter = 0
    let limeCounter = 0
    const limeObj = 
      {
          'small' : 6,
          'medium' : 8,
          'large' : 10
      }
    if (wedgesNeeded === 0)
      {
          return 0
      }
    for (let x of limes)
      {
          wedgeCounter += limeObj[x]
          limeCounter ++
          while (wedgeCounter >= wedgesNeeded)
          {
              return limeCounter
          }
      }
      return limeCounter;
  }
  
  function remainingOrders(timeLeft, orders) {
    while (timeLeft > 0) {
      timeLeft -= timeToMixJuice(orders[0]);
      orders.shift();
    }
    return orders;
  }
  

console.log(remainingOrders(7, [
    'Tropical Island',
    'Energizer',
    'Limetime',
    'All or Nothing',
    'Pure Strawberry Joy',
  ]))
// => ['Green Garden']