//A Jubilee Year is celebrated in Santiago de Compostela whenever July 25, the day of Santiago the Elder, falls on a Sunday.

// For example, as of 2018 we know the last Jubilee year was 2010 and the next is going to be 2021.

// Your task is to create the function isJubilee() that will tell us whether a given year was/is a Jubilee Year or not. For this kata, we're just interested in years from 1900 to 2099 (both included), so don't expect your function to receive any input out of that range.// 

function isJubilee(year) {
    if (year < 1900 || year > 2099) {
      return false
    }
    const date = new Date(year, 6, 25)
    const dayOfWeek = date.getDay()
    if (dayOfWeek === 0) {
      return true
    } else {
      return false
    }
  }
   