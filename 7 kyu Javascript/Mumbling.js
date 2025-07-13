// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
  const lowerCaseString = s.toLowerCase()
  let result = []

  for (let i = 0; i < lowerCaseString.length; i++) {
    let repeatedChars = lowerCaseString[i].toUpperCase() + lowerCaseString[i].repeat(i)
    
    result.push(repeatedChars)
  }

  return result.join('-')
}