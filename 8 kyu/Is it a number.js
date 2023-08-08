// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
    //your code
    s = s.trim()
  
      if (s === "") {
          return false
      }
  
      let dotCount = 0;
  
      for (let i = 0; i < s.length; i++) {
          const char = s[i]
  
          if (char === '.') {
              dotCount++
          } else if (char === '-' || char === '+') {
              if (i !== 0) {
                  return false
              }
          } else if (char < '0' || char > '9') {
              return false
          }
      }
  
      return dotCount <= 1
  }