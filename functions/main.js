// function sum (number){
//     return number*2
// }

// sum(10)


// const sum = (number) => number *2




// 1.
function add7 (number){
    return number + 7
}

console.log(add7(12))


// 2. 
 function multiply (a,b){
     return a*b 
}

console.log(multiply (5,7))


// 3.
 function capitalize (string){
    if (string.length > 0) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    } else {
        return string; 
    }
}
console.log(capitalize("HeLlo, WorLd!"))

//4.
 function lastLetter(string){
    return string.charAt(string.length -1 )

 } 

console.log(lastLetter("abcdefg"))

//5. Write a function named addNumbers that takes two parameters, num1 and num2.
// The function should return the sum of these numbers.
// Example: addNumbers(5, 10) should return 15.

function addNumbers(num1,num2){
    return num1+num2
}

console.log(addNumbers(4,6))


//6.Create a function named isEven that takes a single parameter, number.
// The function should return true if the number is even and false if it is odd.
// Example: isEven(4) should return true.

function isEven(number){
    if(number%2===0){
        return "true"
    }else 
        return "odd"
}

console.log(isEven(34))

//7.Write a function called fahrenheitToCelsius that converts Fahrenheit to Celsius.
// The formula to convert Fahrenheit to Celsius is (Fahrenheit - 32) * 5/9.
// Example: fahrenheitToCelsius(32) should return 0.

function fahrenheitToCelsius(number){
    return (number - 32) * 5/9
}

console.log(fahrenheitToCelsius(32))

//8.Create a function named concatenateStrings that takes two string parameters, str1 and str2.
// The function should return the concatenation of these strings.
// Example: concatenateStrings("Hello, ", "world!") should return "Hello, world!".

function concatenateStrings(str1,str2){
    return(str1.concat("," , str2))
}
console.log(concatenateStrings("Hello", "world!"))

//9.Write a function named calculateFactorial that takes a single parameter, num.
// The function should return the factorial of the number. (Factorial of n is the product of all positive integers less than or equal to n).
// Example: calculateFactorial(5) should return 120 (because 54321 = 120).

function calculateFactorial(num){
    let product=1
    for(let i=1; i<=num; i++){
        product = product * i
    }
    return product 
}
console.log(calculateFactorial(5))


//10.Create a function named findLargestNumber that takes an array of numbers as a parameter.
// The function should return the largest number in the array.
// Example: findLargestNumber([1, 2, 3, 4, 5]) should return 5.

function findLargestNumber(arr){
  let largestNumber = arr[0]
  for(i=0; i<arr.length; i++){
    if(arr[i]>largestNumber){
        largestNumber = arr[i]
    }
  }
  return largestNumber
}
console.log(findLargestNumber([1,2,3,4,5]))


//11.Write a function named reverseString that takes a string parameter, str.
// The function should return the reverse of the string.
// Example: reverseString("hello") should return "olleh".

function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("hello"))