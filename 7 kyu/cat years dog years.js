// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function ownedCatAndDog(catYears, dogYears) {
    let ownedCat = 0;
    let ownedDog = 0;

    if(catYears < 15){
        ownedCat += 0
    } else if(catYears >= 15 && catYears < 24) {
        ownedCat += 1
    } else if(catYears >= 24 && catYears < 28) {
        ownedCat += 2
    } else if(catYears > 24) {
        ownedCat = Math.floor((catYears - 24) / 4 + 2)
    }

    if(dogYears < 15){
        ownedDog += 0
   } else if(dogYears >= 15 && dogYears < 24) {
        ownedDog += 1
    } else if(dogYears >= 24 && dogYears < 29) {
        ownedDog += 2
    } else if(dogYears > 24) {
        ownedDog = Math.floor((dogYears - 24) / 5 + 2)
    }


    return [ownedCat, ownedDog];
  }