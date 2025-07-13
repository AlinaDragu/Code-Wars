// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

// You can assume the input will always be a number.


function validateCode (code) {
    //your code here
      // Use a regular expression to check if the code matches the pattern.
      // ^ indicates the start of the string, [1-3] matches 1, 2, or 3, and .* matches any remaining characters.
      const pattern = /^[1-3].*/;
      
      // Use the test() method of the regular expression to check if the code matches the pattern.
      return pattern.test(code);
      
    }