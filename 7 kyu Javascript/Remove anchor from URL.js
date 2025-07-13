// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    // TODO: complete
     const indexOfHash = url.indexOf('#')
    if (indexOfHash !== -1) {
      return url.substring(0, indexOfHash)
    }
    return url
  }