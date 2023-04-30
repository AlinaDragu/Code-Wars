// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name){

    // code away
    let names = name.split(' ');
    let firstInitial = names[0][0].toUpperCase();
    let secondInitial = names[1][0].toUpperCase();
    return `${firstInitial}.${secondInitial}`;

}