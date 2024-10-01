// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = function(arr) { 
      let n = arr[arr.length - 1]
      let newArr = []
      for (let i = 1; i <= n; i++){
            newArr.push(i)
      }
      for(let j = 0; j < newArr.length; j++){
            if (! arr.includes(newArr[j])){
                  return newArr[j]
            }
      } 
}


console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3