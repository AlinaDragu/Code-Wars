// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.

function rowWeights(array){
    //your code here
     let team1Total = 0
    let team2Total = 0
  
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        team1Total += array[i]
      } else {
        team2Total += array[i]
      }
    }
  
    return [team1Total, team2Total]
  }