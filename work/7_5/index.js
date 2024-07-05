function needsLicense(kind) {
    return kind === 'car' || kind === 'truck'
  }

  function chooseVehicle(option1, option2) {
    let sortedOptions = [option1, option2].sort();
    return `${sortedOptions[0]} is clearly the better choice.`
  }

  function calculateResellPrice(originalPrice, age) {
    let ageDeprication = age
    return originalPrice - (originalPrice * (ageDeprication / 100))
  }
  
console.log(calculateResellPrice(1000, 1));