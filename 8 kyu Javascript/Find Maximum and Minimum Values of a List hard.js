//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
    let minVal = list[0];
    for(let i = 1; i < list.length; i++) {
        if(list[i] < minVal) {
            minVal = list[i];
        }
    }
    return minVal;
}

var max = function(list){
    let maxVal = list[0];
    for(let i = 1; i < list.length; i++) {
        if(list[i] > maxVal) {
            maxVal = list[i];
        }
    }
    return maxVal;
}