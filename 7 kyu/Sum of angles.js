// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    //code here
     if (n > 2) {
      return (n - 2) * 180;
    } else {
      return "Number of sides should be greater than 2 for a polygon."
    }
  }