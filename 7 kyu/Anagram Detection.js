// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
const normalizeString = (str) => {
    return str.toLowerCase().split('').sort().join('')
  }
  
  var isAnagram = function(test, original) {
    const normalizedTest = normalizeString(test)
    const normalizedOriginal = normalizeString(original)
    return normalizedTest === normalizedOriginal
  };