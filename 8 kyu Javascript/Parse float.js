// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.


function parseF(s) {
   if (typeof s === 'number') {
    return s
  }

  const parsedNumber = parseFloat(s)

  if (!isNaN(parsedNumber)) {
    return parsedNumber
  } else {
    return null
  }
}