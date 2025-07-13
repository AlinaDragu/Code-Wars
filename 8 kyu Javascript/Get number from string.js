// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)



function getNumberFromString(s) {
    const digitsArray = s.match(/\d+/g)
 
     if (digitsArray) {
     const result = parseInt(digitsArray.join(''), 10)
     return result
   } else {
     return 0
   }
 }