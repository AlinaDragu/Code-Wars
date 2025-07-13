// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    //#Happy Coding! ^_^
     let milliseconds = ((h * 3600) + (m * 60) + s) * 1000
     return milliseconds
  }