// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


function sameCase(a, b){
 if (!isLetter(a) || !isLetter(b)) {
    return -1
  }
  if ((isUpperCase(a) && isUpperCase(b)) || (!isUpperCase(a) && !isUpperCase(b))) {
    return 1
  } else {
    return 0
  }
}

function isLetter(char) {
  return /^[A-Za-z]$/.test(char)
}

function isUpperCase(char) {
  return /^[A-Z]$/.test(char)
}