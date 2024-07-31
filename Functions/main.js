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





//12. you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.


function String(str){
    return str.split(' ').map(word => word.split('').reverse().join('')).reverse().join(' ')
 }

console.log(String('Hello World !'))



//13. Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name){
    if(name[0].toLowerCase()=== 'r'){
        return `${name} you are playing banjo!`
    }else{
        return `${name} you are not playing banjo`
    }
}

console.log(areYouPlayingBanjo("madalin"))


//14.Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function oppositeNumber(number){
    return number * (-1)
}

console.log(oppositeNumber(4))



//15. RockPaperScissors 
//-nu avem interfata jocul se va juca din consola
// -luam input de la user prin prompt()
// -vrem sa ajungem la player win sau computer win
// 1. obtinem alegerea computerului
//2. obtinem alegerea userului
//3. jucam o runda


function getcomputersChoice(){
   const pick = ['rock', 'paper', 'scissors'];
   return pick[Math.floor(Math.random() * pick.length)]
}


function getplayersChoice(){
    let choice = prompt("what s your choice?")
    console.log(choice)
    return choice
}

function RockPaperScissors(computersChoice,playersChoice){
    computersChoice = getcomputersChoice()
    playersChoice = getplayersChoice()
    if(computersChoice === playersChoice ){
        console.log(`its a tie because you both chose ${playersChoice} ${computersChoice}`)
    }else if((computersChoice === "rock" && playersChoice === "scissors") ||
            (computersChoice === "paper" && playersChoice === "rock") ||
            (computersChoice === "scissors" && playersChoice === "paper")){
                console.log(`you lost because you chose ${playersChoice} and pc chose ${computersChoice}`)
    }else{
       console.log(`you won because you chose ${playersChoice} and pc chose ${computersChoice}`)
    }
}
RockPaperScissors()


//16. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

    function list(arr){
      return arr.filter((element)  => typeof element === 'number')
    }
    console.log(list([1,2,3,4, 'p','r',5,6]))


//17.Use the for loop to output even numbers from 2 to 10.

for(let i=2; i<=10; i++ ){
    if(i%2===0){
      alert (i)
    }
}



//18.Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// let i = 0;

// while(i<3){
//     alert( `number ${i}!` )
//     i++;
// }


//19.Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.



// let i=prompt('Enter a number greater than 100')

// while(i<100){
//     i=prompt('Enter a number greater than 100')
//     break;
// }



//20.An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}



//21.Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//define function and set a parameter
//define a variable with arr[0]  because the array index starts at 0
//use a loop and a conditional to find the smallest number


function findSmallestNumber(arr){
    let smallestNumber = arr[0]
    for(i=0; i<arr.length; i++){
      if(arr[i]<smallestNumber){
          smallestNumber = arr[i]
      }
    }
    return smallestNumber
  }
  console.log(findSmallestNumber([1,-4562,3,4,5]))


  //22.Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

// define function and set a parameter
//use split(' ') and join('') to remove the spaces
//console.log the function


function removeSpaces(str){
    return str.split(' ').join('')
}

console.log(removeSpaces(" 4 t t h j y 6 7 v d "))




//23.Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanValue(value){
    return value.toString()
}

console.log(booleanValue(true))


//24. Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5


function cycling(time){
    return Math.floor(time * 0.5)   
 }

 console.log(cycling(3))



//25Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


function sheep(arr){
    return arr.filter((element)  => element === true ).length
}

console.log(sheep([true,false,true,false,true,true,true,false,false,true]))


//26.Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    return words.splice(' ').slice().join(' ')     // or return words.join(' ')
 }


//  //27. Simple, given a string of words, return the length of the shortest word(s).

// // String will never be empty and you do not need to account for different data types.


function findShort(s){
    let words = s.split(' ').map((word) => word.length)
    return Math.min(...words)
}


//28.The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    // Finish this :)
    return Math.ceil(year/100)
  }


  
  