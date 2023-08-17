// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

// For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).

// Notes:

// The output should be a string.
// The coefficient and exponent is always a positive integer.


function integrate(coefficient, exponent) {
    const newExponent = exponent + 1
      const newCoefficient = coefficient / newExponent
      return `${newCoefficient}x^${newExponent}`
    }