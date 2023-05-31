// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
    if (!Array.isArray(array) || array.length <= 2) {
    return 0
  }

  let sortedArray = array.sort((a, b) => a - b)

  let sum = 0
  for (let i = 1; i < sortedArray.length - 1; i++) {
    sum += sortedArray[i]
  }

  return sum
}