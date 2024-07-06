function calculateResellPrice(originalPrice, age) {
  const ageToPercentage = [
    // each object key is a function that defines if ageRange is a boolean
    // each value is a discount decimal that returns the discount when multiplied by the key
    { ageRange: (age) => age < 3, discount: 0.80 },
    { ageRange: (age) => age >= 3 && age <= 10, discount: 0.70 },
    { ageRange: (age) => age > 10, discount: 0.50 }
  ];

  for (const x of ageToPercentage) 
    // iterates object into key, value pair { ageRange: [Function: ageRange], discount: 0.8 }
  {
    if (x.ageRange(age)) {
      const discountedPrice = Math.floor(originalPrice * x.discount);
      // ex: 40000 * .80 = 32000
      return discountedPrice;
    }
  }

}

// Example usage
console.log(calculateResellPrice(40000, 2)); // Expected Output: 32000 (20% discount)
console.log(calculateResellPrice(40000, 5)); // Expected Output: 28000 (30% discount)
console.log(calculateResellPrice(40000, 11)); // Expected Output: 20000 (50% discount)