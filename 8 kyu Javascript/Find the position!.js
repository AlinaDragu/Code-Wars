// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    //Write your own Code!
      letter = letter.toLowerCase()
      let position = letter.charCodeAt(0) - 97 + 1
      return "Position of alphabet: " + position
    }