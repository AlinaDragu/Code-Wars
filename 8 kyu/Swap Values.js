// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?


function swapValues(arg) {
    let temp = arg[0]
    arg[0] = arg[1]
    arg[1] = temp
}