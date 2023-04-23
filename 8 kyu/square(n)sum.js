// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = (numbers) => numbers.map((pandi) => pandi = pandi**2)
   .reduce((sum,val) => sum+val ,0)