// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


function distinct(a) {
    let seen = new Set()
    let result = []
    for (let num of a) {
      if (!seen.has(num)) {
        seen.add(num)
        result.push(num)
      }
    }
    return result
  }