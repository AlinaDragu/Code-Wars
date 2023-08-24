// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVowel(charCode) {
    // Check if the character code corresponds to a lower case vowel
    return ['a', 'e', 'i', 'o', 'u'].includes(String.fromCharCode(charCode));
}

function isVow(arr) {
    // Iterate through the array and check if each element is a lower case vowel's character code
    for (let i = 0; i < arr.length; i++) {
        if (isVowel(arr[i])) {
            arr[i] = String.fromCharCode(arr[i]); // Convert the character code to the vowel itself
        }
    }
    
    return arr;
}
