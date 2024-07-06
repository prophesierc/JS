function calculateResellPrice(originalPrice, age) {
  const ageToPercentage = [
    { ageRange: (age) => age < 3, discount: 0.80 },
    { ageRange: (age) => age >= 3 && age <= 10, discount: 0.70 },
    { ageRange: (age) => age > 10, discount: 0.50 }
  ];

  for (const x of ageToPercentage) {
    if (x.ageRange(age)) {
      const discountedPrice = Math.floor(originalPrice * x.discount);
      return discountedPrice;
    }
  }

}

// Example usage
console.log(calculateResellPrice(40000, 2)); // Expected Output: 32000 (20% discount)
console.log(calculateResellPrice(40000, 5)); // Expected Output: 28000 (30% discount)
console.log(calculateResellPrice(40000, 11)); // Expected Output: 20000 (50% discount)