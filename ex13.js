// Exercise 13: Write a recursive function `sumRange` that takes a number `n`
// and returns the sum of all numbers from 1 to `n`.
// Example: sumRange(5) should return 15 (1 + 2 + 3 + 4 + 5).
const sumRange = function (num) {
      const numArr = []
      for (let i = 1; i <= num; i++){
            numArr.push(i)
      }

      const sum = numArr.reduce((total, currentElement) => {
            return total + currentElement
      }, 0 )

      return sum

}

console.log(sumRange(5)); // Expected output: 15