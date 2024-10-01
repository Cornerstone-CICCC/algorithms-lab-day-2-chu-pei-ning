// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

const findMax = function (arr) {
      const getMax = arr.reduce((max, current ) => {
            if (current > max) {
                  return current
            } else {
                  return max
            }
      })
      return getMax
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9