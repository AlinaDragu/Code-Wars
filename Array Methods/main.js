

//1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
    return str
      .split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  }



//2.Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered );

alert( arr ); 


//3.Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

function filterRangeInPlace(arr2, a, b) {

  for (let i = 0; i < arr2.length; i++) {
    let val = arr2[i];
    if (val < a || val > b) {
      arr2.splice(i, 1);
      i--;
    }
  }

}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); 

alert( arr2 ); 


//4.Sort in decreasing order

let arr3 = [5, 2, 1, -10, 8]

// ... your code to sort it in decreasing order
arr3.sort((a,b) => b - a)


 alert( arr3 ); // 8, 5, 2, 1, -10


